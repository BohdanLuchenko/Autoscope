import { makeStyles } from "@material-ui/core/styles";
import logo from "./../../../src/assets/images/svg/logo-text.svg";
import visa from "./../../../src/assets/images/svg/visa-logo.svg";
import masterCard from "./../../../src/assets/images/svg/masterCard-logo.svg";
import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "50px",
    flex: "0 1 auto",
    width: "100%",
  },
  info: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
    color: "rgba(152, 157, 181, 1)",
    width: 330,
  },
  mail: { cursor: "pointer", "&:hover": { color: "white" } },
  icon: { marginLeft: 20 },
});
const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/home">
        <img src={logo} alt="AutoScope technology" />
      </Link>
      <div className={classes.info}>
        <span className={classes.text}>
          Підтримка:
          <a className={classnames(classes.text, classes.mail)} href="mailto:support@waveform-analyzer.com">
            support@waveform-analyzer.com
          </a>
        </span>
        <img className={classes.icon} src={masterCard} alt="mastercard" />
        <img className={classes.icon} src={visa} alt="visa" />
      </div>
    </div>
  );
};

export default Header;
