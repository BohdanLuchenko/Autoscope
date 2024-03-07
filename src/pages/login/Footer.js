import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import facebook from "./../../../src/assets/images/svg/facebook.svg";
import insta from "./../../../src/assets/images/svg/insta.svg";
import youtube from "./../../../src/assets/images/svg/youtube.svg";
import masterCard from "assets/images/svg/masterCard-logo.svg";
import visa from "assets/images/svg/visa-logo.svg";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    listStyleType: "none",
    width: "100%",
    paddingBottom: 6,
  },
  item: {
    flexWrap: "nowrap",
    width: "auto",
    display: "flex",
    flexDirection: "column",
    margin: "0 12px",
  },

  text: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 500,
    color: "rgba(152, 157, 181, 1)",
    maxWidth: 1000,
    marginBottom: 6,
    flexWrap: "nowrap",
    width: "auto",
    display: "flex",
  },
  mail: { cursor: "pointer", "&:hover": { color: "white" } },
  icon: { margin: "0 5px 0 0 ", cursor: "pointer" },
  icons: { display: "flex" },
  cards: { marginBottom: 10 },
});
const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <ul className={classes.root}>
      <li className={classes.item}>
        <span className={classes.text}>{t("auth.footer.social")}</span>
        <div className={classes.icons}>
          <img className={classes.icon} src={facebook} alt="facebook" />
          <img className={classes.icon} src={insta} alt="instagram" />
          <img className={classes.icon} src={youtube} alt="youtube" />
        </div>
      </li>
      <li className={classes.item}>
        <span className={classes.text}>{t("auth.footer.support")}</span>
        <a className={classnames(classes.text, classes.mail)} href="mailto:support@waveform-analyzer.com">
          support@waveform-analyzer.com
        </a>
      </li>
      <li className={classes.item}>
        <span className={classes.text}>{t("auth.footer.forum")}</span>
        <span className={classes.text}>{t("auth.footer.site")}</span>
      </li>
      <li className={classes.item}>
        <span className={classes.text}>Copyright © Autoscope Technology {year}</span>
        <Link to="/legal">
          <span className={classnames(classes.text, classes.mail)}>{t("auth.footer.politics")}</span>
        </Link>
      </li>

      <li className={classes.item}>
        <img className={classnames(classes.icon, classes.cards)} src={masterCard} alt="mastercard" />
        <img className={classnames(classes.icon, classes.cards)} src={visa} alt="visa" />
      </li>
    </ul>
  );
};

export default Footer;
