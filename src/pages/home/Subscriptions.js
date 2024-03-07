import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getProductsRequest } from "utils/api";
import { defaultErrorMethod } from "components/Common/responses/message";

import classnames from "classnames";
import { camelCaseTextFormatter, customDateFormatWithTime } from "components/Common/formatter";

const useStyles = makeStyles({
  root: { display: "flex", flexDirection: "column", flex: "1 1 auto", height: "100%", maxWidth: 1000, width: "100%" },
  info: { display: "flex", flexDirection: "row" },
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 900,
    color: "rgba(255, 255, 255, 1)",
    marginRight: 100,
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
    color: "rgba(152, 157, 181, 1)",
  },
  keyName: { color: "#fff", fontWeight: "700" },
  mail: { cursor: "pointer" },
  icon: { marginLeft: 20 },
  keysWrapper: {
    listStyleType: "none",
    margin: "20px 0",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    marginRight: 20,
  },
  keyItem: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(54, 62, 107, 1)",
    padding: 16,
    width: 300,
    marginBottom: 8,
    borderRadius: 14,
    color: "#989DB5",
  },

  getMoreKeys: {
    color: "#fff",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textAlign: "center",
    cursor: "pointer",
  },
  content: { display: "flex", height: "100%" },
  details: { height: "100%", width: "100%", backgroundColor: "white", margin: "20px 0" },
});
const Subscriptions = ({ setLoader }) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    setLoader(true);
    await getProductsRequest()
      .then(async res => {
        setLoader(false);
        setProducts(res?.data?.products);
      })
      .catch(err => {
        setLoader(false);
        defaultErrorMethod(err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <span className={classes.text}>Підписки</span>
      </div>
      <div className={classes.content}>
        {!!products?.length && (
          <ul className={classes.keysWrapper}>
            {products.map(item => (
              <li className={classes.keyItem} key={item.appKey}>
                <span className={classes.keyName}>
                  {camelCaseTextFormatter(item.type)} - {item?.productSlug}
                </span>
                <span className={classes.keyType}>Valid to: {customDateFormatWithTime(item?.expireAt)}</span>
              </li>
            ))}
            <li className={classnames(classes.keyItem, classes.keyItemLast)}>
              <span className={classes.getMoreKeys}>Підключити інші</span>
            </li>
          </ul>
        )}
        <div className={classes.details}>details</div>
      </div>
    </div>
  );
};

export default Subscriptions;
