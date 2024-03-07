import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import laptop from "./../../../src/assets/images/svg/laptop.svg";
import Footer from "pages/login/Footer";
import React, { useCallback, useState } from "react";
import classnames from "classnames";
import SignUp from "pages/login/SingUp";
import SignIn from "pages/login/SignIn";
import OpenCvComponent from "pages/openCV/OpenCVCOmponent";

const useStyles = makeStyles({
  root: {
    padding: "50px 50px 0 50px",
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
    justifyContent: "center",
    flexGrow: 1,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 900,
    color: "rgba(255, 255, 255, 1)",
    marginRight: 100,
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 500,
    color: "rgba(152, 157, 181, 1)",
    cursor: "pointer",
  },
  laptop: {
    maxWidth: "90%",
    marginTop: 50,
  },
  left: { maxWidth: "60%", transition: "max-width 0.3s" },
  right: { maxWidth: "60%", transition: "max-width 0.3s" },
  hide: { maxWidth: 0, transition: "max-width 0.3s", opacity: 0 },
  center: { width: "40%" },
});
const LoginPage = () => {
  const classes = useStyles();
  const [isSignInScreen, setIsSignInScreen] = useState(true);

  const handleSignUpScreen = useCallback(() => setIsSignInScreen(true), []);
  const handleSignInScreen = useCallback(() => setIsSignInScreen(false), []);

  return (
    <div className={classes.root}>
      <Header />
      <OpenCvComponent />
      <ul className={classes.content}>
        <li className={classnames(classes.left, !isSignInScreen && classes.hide)}>
          <SignIn setIsSignUpScreen={handleSignInScreen} />
        </li>

        <li className={classes.center}>
          <img className={classes.laptop} src={laptop} alt="" />
        </li>

        <li className={classnames(classes.right, isSignInScreen && classes.hide)}>
          <SignUp setIsSignInScreen={handleSignUpScreen} />
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default LoginPage;
