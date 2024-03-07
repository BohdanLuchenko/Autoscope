import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./../../../src/assets/images/svg/logo-big.svg";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 500,
    color: "rgba(152, 157, 181, 1)",
    maxWidth: 1000,
    width: "80%",
    marginBottom: 6,
  },
  mail: { cursor: "pointer" },
  icon: { maxWidth: 1000, width: "80%" },
  languages: { position: "absolute", top: 0, right: 0 },
});
const Header = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(lng => i18n.changeLanguage(lng), []);

  return (
    <div className={classes.root}>
      <span className={classes.text}>{t("auth.header.title")}</span>
      <img className={classes.icon} src={logo} alt="mastercard" />
      <div className={classes.languages}>
        <button onClick={() => changeLanguage("ua")}>ua</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
    </div>
  );
};

export default Header;
