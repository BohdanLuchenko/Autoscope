import { makeStyles } from "@material-ui/core/styles";
import React, { useCallback, useEffect, useState } from "react";
import { Form } from "antd";
import { inputPatternTitle, inputTextPattern } from "components/Common/inputs/variables";
import CustomButton from "components/Common/buttons/CustomButton";
import { emailConfirmRequest, emailRegisterRequest } from "utils/api";
import { defaultErrorMethod, warnMessage } from "components/Common/responses/message";
import CustomInput from "components/Common/inputs/CustomInput";
import classname from "classnames";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#242945",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
  },
  content: {
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 900,
    color: "rgba(255, 255, 255, 1)",
    marginRight: 100,
    marginBottom: 10,
  },
  description: {
    width: 280,
    marginTop: 10,
    marginBottom: 30,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 500,
    color: "rgba(152, 157, 181, 1)",
    cursor: "pointer",
  },
  laptop: {
    maxWidth: "90%",
  },
  left: { maxWidth: "60%", transition: "max-width 0.3s" },
  right: { maxWidth: "60%", transition: "max-width 0.3s" },
  hide: { maxWidth: 0, transition: "max-width 0.3s", opacity: 0 },
  center: { width: "40%" },
  underlined: { textDecoration: "underline" },
  inputWarning: {
    "&>input": {
      color: "red !important",
    },
  },
  button: { width: "fit-content" },
  counter: {
    marginTop: 20,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
    color: "rgba(152, 157, 181, 1)",
    cursor: "pointer",
  },
});
const SignUp = ({ setIsSignInScreen }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [errors, setErrors] = useState(null);
  const [emailValidator, setEmailValidator] = useState(false);
  const [passValidator, setPassValidator] = useState(false);
  const [passReValidator, setPassReValidator] = useState(false);
  const [form] = Form.useForm();
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const handleSignUpScreen = useCallback(() => setIsSignInScreen(true), []);

  const onFinish = async values => {
    await emailRegisterRequest(values)
      .then(async res => {
        const { token, accountId } = res?.data;
        localStorage.setItem("accountId", JSON.stringify(accountId));
        localStorage.setItem("authToken", JSON.stringify(token));
        setRegisterSuccess(true);
        setErrors(null);
      })
      .catch(err => {
        setErrors({ err: err?.response?.data?.errors, fields: values });
        form.validateFields(["email", "password", "password_confirmation"]);
        defaultErrorMethod(err);
      });
  };

  const handleEmailConfirm = async () => {
    setCounter(60);
    await emailConfirmRequest()
      .then(async res => {
        warnMessage(t("auth.signUp.confirmMessage"));
        setErrors(null);
      })
      .catch(err => {
        defaultErrorMethod(err);
      });
  };

  return (
    <div className={classes.root}>
      {registerSuccess ? (
        <>
          <span className={classes.text}>{t("auth.signUp.confirmTitle")}</span>
          <span className={classes.description}>
            {t("auth.signUp.confirmDescription1")}
            <br />
            <br />
            {t("auth.signUp.confirmDescription2")}
          </span>
          <CustomButton
            className={classes.button}
            onClick={handleEmailConfirm}
            type="primary"
            disabled={!!counter}
            htmlType="submit"
            text={t("auth.signUp.resendButton")}
          />
          {!!counter && (
            <span className={classes.counter}>
              {t("auth.signUp.resendText1")}
              {counter}
              {t("auth.signUp.resendText2")}
            </span>
          )}
        </>
      ) : (
        <>
          <span className={classes.text}>{t("auth.signUp.helloTitle1")}</span>
          <Form form={form} name="email_register" onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: t("auth.signUp.hintEmail") },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!!errors?.err?.email && getFieldValue("email") === errors?.fields?.email) {
                      setEmailValidator(true);
                      return Promise.reject(errors?.err?.email);
                    }
                    setEmailValidator(false);
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <CustomInput
                className={classname(emailValidator && classes.inputWarning)}
                placeholder={t("auth.signUp.hintEmail")}
                allowClear
                pattern={inputTextPattern}
                title={inputPatternTitle}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: t("auth.signUp.hintPassword") },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!!errors?.err?.password && getFieldValue("password") === errors?.fields?.password) {
                      setPassValidator(true);
                      return Promise.reject(errors?.err?.password);
                    }
                    setPassValidator(false);
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <CustomInput
                className={classname(passValidator && classes.inputWarning)}
                placeholder={t("auth.signUp.hintPassword")}
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="password_confirmation"
              rules={[
                { required: true, message: t("auth.signUp.hintRePassword") },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (
                      !!errors?.err?.password_confirmation &&
                      getFieldValue("password_confirmation") !== getFieldValue("password") &&
                      getFieldValue("password_confirmation") === errors?.fields?.password_confirmation
                    ) {
                      setPassReValidator(true);
                      return Promise.reject(errors?.err?.password_confirmation);
                    }
                    setPassReValidator(false);
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <CustomInput
                className={classname(passReValidator && classes.inputWarning)}
                placeholder={t("auth.signUp.hintRePassword")}
                allowClear
              />
            </Form.Item>

            <CustomButton type="primary" htmlType="submit" text={t("auth.signUp.enterButton")} />
          </Form>
          <span className={classes.description} onClick={handleSignUpScreen}>
            {t("auth.signUp.accountText")} <span className={classes.underlined}>{t("auth.signUp.textEnter")}</span>
          </span>
        </>
      )}
    </div>
  );
};

export default SignUp;
