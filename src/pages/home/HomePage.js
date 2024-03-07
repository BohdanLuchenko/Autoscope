import { makeStyles } from "@material-ui/core/styles";
import Header from "pages/home/Header";
import Keys from "pages/home/Keys";
import Subscriptions from "pages/home/Subscriptions";

import { useNavigate } from "react-router-dom";
import { warnMessage } from "components/Common/responses/message";
import { useCallback, useState } from "react";
import { Spin } from "antd";

const useStyles = makeStyles({
  root: {
    padding: 30,
    backgroundColor: "#242945",
    display: "flex",
    alignItems: "center",
    flexFlow: "column",
    height: "100%",
  },
  spin: { height: "100%" },
});
const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loading, setLoader] = useState(true);
  const handleLoading = useCallback(value => setLoader(value), []);

  const searchParams = new URLSearchParams(document.location.search);
  const token = new URLSearchParams(searchParams).get("token");
  const url_action = new URLSearchParams(searchParams).get("url_action");

  if (url_action === "oauth_authorize" && !!token) {
    localStorage.setItem("authToken", JSON.stringify(token));
    navigate("/");
    warnMessage("Login Success");
  }
  if (url_action === "account_blocked") {
    navigate("/blocked");
  }

  return (
    <>
      <Spin className={classes.spin} spinning={loading}>
        <div className={classes.root}>
          <Header />
          <Keys setLoader={handleLoading} />
          <Subscriptions setLoader={handleLoading} />
        </div>
      </Spin>
    </>
  );
};

export default HomePage;
