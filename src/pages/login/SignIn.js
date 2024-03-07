import { makeStyles } from "@material-ui/core/styles";
import React, { useCallback, useEffect, useState } from "react";
import classname from "classnames";
import { Form } from "antd";
import { emailPattern, inputPatternTitle } from "components/Common/inputs/variables";
import CustomButton from "components/Common/buttons/CustomButton";
import { emailConfirmRequest, emailLoginRequest, getAccountRequest } from "utils/api";
import { defaultErrorMethod, warnMessage } from "components/Common/responses/message";
import CustomInput from "components/Common/inputs/CustomInput";
import facebook from "./../../../src/assets/images/svg/facebook-sign.svg";
import google from "./../../../src/assets/images/svg/google-sign.svg";
//import outlook from "./../../../src/assets/images/svg/outlook-sign.svg";
import { useNavigate } from "react-router-dom";
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
    marginTop: 30,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 500,
    color: "rgba(152, 157, 181, 1)",
    cursor: "pointer",
    width: 290,
  },
  counter: {
    marginTop: 20,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
    color: "rgba(152, 157, 181, 1)",
    cursor: "pointer",
  },
  forgot: {
    marginTop: 10,
    marginLeft: 16,
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
  list: {
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
    padding: 0,
  },
  app: {
    display: "flex",
    flexDirection: "column",
    "&>button": {
      margin: "10px 0",
    },
  },
  flex: { display: "flex" },
  divider: { backgroundColor: "rgba(152, 157, 181, 1)", height: 180, width: 1, margin: "0 30px" },
  inputWarning: {
    "&>input": {
      color: "red !important",
    },
  },
  messageWrapper: { position: "relative" },
  error: { color: "#ff4d4f", fontSize: 10, position: "absolute", bottom: "-16px", left: 10 },
  button: { width: "fit-content", marginTop: 30 },
});
const SignIn = ({ setIsSignUpScreen }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isLoading, setLoader] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(true);
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const handleSignUpScreen = useCallback(() => setIsSignUpScreen(true), []);

  const onFinish = async values => {
    setLoader(true);
    await emailLoginRequest(values)
      .then(async res => {
        const { token, accountId } = res?.data;

        localStorage.setItem("accountId", JSON.stringify(accountId));
        localStorage.setItem("authToken", JSON.stringify(token));
        setErrors(null);
        setLoader(false);
      })
      .then(getAccountRequest)
      .then(res => {
        const { confirmed, blocked } = res?.data;
        setIsConfirmed(confirmed);
        if (blocked) navigate("/blocked");
        else if (confirmed) navigate("/");
        setLoader(false);
      })
      .catch(err => {
        setLoader(false);
        setErrors({ err: err?.response?.data?.errors, fields: values });
        form.validateFields(["email", "password", "password_confirmation"]);
        defaultErrorMethod(err);
      });
  };

  const handleEmailConfirm = async () => {
    setCounter(60);
    await emailConfirmRequest()
      .then(async res => {
        warnMessage(t("auth.signIn.confirmMessage"));
        setErrors(null);
      })
      .catch(err => {
        defaultErrorMethod(err);
      });
  };

  const handleInputChange = useCallback(e => e.target.value === "" && setErrors(null), []);

  return (
    <div className={classes.root}>
      {!isConfirmed ? (
        <>
          <span className={classes.text}>{t("auth.signIn.confirmTitle")}</span>
          <span className={classes.description}>
            {t("auth.signIn.confirmDescription1")}
            <br />
            <br />
            {t("auth.signIn.confirmDescription2")}
          </span>
          <CustomButton
            className={classes.button}
            onClick={handleEmailConfirm}
            disabled={!!counter}
            type="primary"
            htmlType="submit"
            text={t("auth.signIn.resendButton")}
          />
          {!!counter && (
            <span className={classes.counter}>
              {t("auth.signIn.resendText1")}
              {counter}
              {t("auth.signIn.resendText2")}
            </span>
          )}
        </>
      ) : (
        <>
          <span className={classes.text}>
            {t("auth.signIn.helloTitle1")} <br />
            {t("auth.signIn.helloTitle2")}
          </span>
          <ul className={classes.list}>
            <li className={classes.app}>
              <CustomButton
                icon={google}
                type="primary"
                htmlType="submit"
                text="Google"
                link="http://dev.waveform-analyzer.com/api-v2/oauth/google"
              />
              <CustomButton
                icon={facebook}
                type="primary"
                htmlType="submit"
                text="Facebook"
                link="https://dev.waveform-analyzer.com/api-v2/oauth/facebook"
              />
              {/*<CustomButton icon={outlook} type="primary" htmlType="submit" text="Outlook" />*/}
            </li>
            <li className={classes.divider}></li>
            <li>
              <Form form={form} name="email_register" onFinish={onFinish}>
                <div className={classes.messageWrapper}>
                  <Form.Item name="email" rules={[{ required: true, message: t("auth.signIn.hintEmail") }]}>
                    <CustomInput
                      className={classname(!!errors && classes.inputWarning)}
                      placeholder={t("auth.signIn.hintEmail")}
                      onChange={handleInputChange}
                      allowClear
                      pattern={emailPattern}
                      title={inputPatternTitle}
                    />
                  </Form.Item>
                  <span className={classes.error}>
                    {!!errors?.err?.email &&
                      form.getFieldValue("email") === errors?.fields?.email &&
                      errors?.err?.email}
                    {!!errors?.err?.password &&
                      form.getFieldValue("password") === errors?.fields?.password &&
                      errors?.err?.password}
                  </span>
                </div>
                <Form.Item name="password" rules={[{ required: true, message: t("auth.signIn.hintPassword") }]}>
                  <CustomInput placeholder={t("auth.signIn.hintPassword")} allowClear />
                </Form.Item>

                <div className={classes.flex}>
                  <CustomButton
                    type="primary"
                    htmlType="submit"
                    text={t("auth.signIn.enterButton")}
                    loading={isLoading}
                    disabled={isLoading}
                  />
                  <span className={classes.forgot}>{t("auth.signIn.forgotMessage")}</span>
                </div>
              </Form>
            </li>
          </ul>

          <span className={classes.description} onClick={handleSignUpScreen}>
            {t("auth.signIn.noAccountText")}
            <span className={classes.underlined}>{t("auth.signIn.noAccountRegister")}</span>
          </span>
        </>
      )}
    </div>
  );
};

export default SignIn;
