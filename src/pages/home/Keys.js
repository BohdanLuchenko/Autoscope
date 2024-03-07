import React, { useCallback, useEffect, useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getAppKeysRequest, getAppSessionsRequest, removeSessionRequest } from "utils/api";
import { defaultErrorMethod, warnMessage } from "components/Common/responses/message";
import key from "./../../../src/assets/images/svg/key.svg";
import close from "./../../../src/assets/images/svg/close.svg";
import classnames from "classnames";
import { customDateMonth } from "components/Common/formatter";

const useStyles = makeStyles({
  root: { display: "flex", flexDirection: "column", marginBottom: 50, flex: "0 1 auto", maxWidth: 1000, width: "100%" },
  info: { display: "flex", flexDirection: "row" },
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 900,
    color: "rgba(255, 255, 255, 1)",
    marginRight: 30,
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
    color: "rgba(152, 157, 181, 1)",
  },
  mail: { cursor: "pointer" },
  icon: { marginLeft: 20 },
  keysWrapper: { listStyleType: "none", margin: "20px 0", padding: 0, display: "flex" },
  keyItem: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(54, 62, 107, 1)",
    padding: 16,
    marginRight: 8,
    borderRadius: 14,
    color: "#989DB5",
  },
  keyItemLast: {
    "&:hover": { opacity: "100%" },
    opacity: "70%",
    transition: "opacity 0.3s",
  },
  divider: { backgroundColor: "rgba(152, 157, 181, 1)", height: 1, width: "100%", margin: "10px 0" },
  keyName: { color: "#fff", fontWeight: "700" },
  keyAppKey: {
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
    "&:hover>div": { width: "400px", display: "flex", padding: 16 },
  },
  copy: { color: "#fff", fontWeight: "700", cursor: "pointer" },
  keyAppKeyPreview: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 0,
    backgroundColor: "#4F5CA1",
    margin: 0,
    borderRadius: 14,
    color: "#fff",
    fontWeight: "700",
    overflow: "hidden",
    padding: 0,
    display: "flex",
    transition: "width 0.3s",
    flexDirection: "column",
    zIndex: 2,
  },
  iconKey: { width: 10, marginRight: 6 },
  getMoreKeys: {
    color: "#fff",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100px",
    textAlign: "center",
    cursor: "pointer",
  },
});
const Keys = ({ setLoader }) => {
  const classes = useStyles();
  const [keys, setKeys] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [newKeyIndex, setNewKeyIndex] = useState(0);

  useEffect(() => {
    if (sessions.length === 0) setNewKeyIndex(1);
    else setNewKeyIndex(0);
  }, [sessions]);

  const filteredKeys = useMemo(
    () => keys.filter(item => !sessions.some(even => even.appKey === item.appKey)),
    [keys, sessions]
  );
  useEffect(() => {
    handleGetAppKeys();
    handleGetAppSessions();
  }, []);

  const handleGetAppKeys = useCallback(async () => {
    setLoader(true);
    await getAppKeysRequest()
      .then(async res => {
        setLoader(false);
        setKeys(res?.data);
      })
      .catch(err => {
        setLoader(false);
        defaultErrorMethod(err);
      });
  }, []);

  const handleGetAppSessions = useCallback(async () => {
    setLoader(true);
    await getAppSessionsRequest()
      .then(async res => {
        setLoader(false);
        setSessions(res?.data);
      })
      .catch(err => {
        setLoader(false);
        defaultErrorMethod(err);
      });
  }, []);

  const handleFinishSession = useCallback(async id => {
    setLoader(true);
    await removeSessionRequest(id)
      .then(async res => {
        setLoader(false);
        warnMessage("Сесію завершено успішно");
        handleGetAppKeys();
        handleGetAppSessions();
      })
      .catch(err => {
        setLoader(false);
        defaultErrorMethod(err);
      });
  }, []);

  const copyKey = useCallback(key => {
    navigator.clipboard.writeText(key);
    warnMessage("Вибраний ключ успішно скопійовано");
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <span className={classes.text}> Мої пристрої та ключі</span>
        <span className={classes.description}>Кожен пристрій підключається за допомогою ключа</span>
      </div>
      <ul className={classes.keysWrapper}>
        {sessions.map(item => (
          <li className={classes.keyItem} key={item.appKey}>
            <span className={classes.keyName}>{item?.location?.city}</span>
            <span className={classes.keyType}>{item?.osProductName}</span>
            <span className={classes.keyType}>Active at: {customDateMonth(item?.lastActivityAt)}</span>
            <div className={classes.divider} />
            <span className={classes.keyAppKey}>
              Показати ключ
              <div className={classes.keyAppKeyPreview}>
                <span onClick={() => copyKey(item.appKey)}>
                  <img src={key} alt="key" className={classes.iconKey} />
                  {item.appKey}
                </span>
                <span className={classes.copy} onClick={() => copyKey(item.appKey)}>
                  Скопіювати
                </span>
                <div className={classes.divider} />
                <span className={classes.copy} onClick={() => handleFinishSession(item.sessionId)}>
                  <img src={close} alt="close" className={classes.iconKey} />
                  Завершити сесію
                </span>
              </div>
            </span>
          </li>
        ))}
        {filteredKeys.map((item, number) => {
          if (number >= newKeyIndex) {
            return null;
          }
          return (
            <li className={classes.keyItem} key={item.appKey}>
              <span className={classes.keyName}>New key</span>
              <span className={classes.keyType}>Type: {item?.type}</span>
              <span className={classes.keyType}>Not activated</span>

              <div className={classes.divider}></div>
              <span className={classes.keyAppKey}>
                Показати ключ
                <div className={classes.keyAppKeyPreview} onClick={() => copyKey(item.appKey)}>
                  <span>
                    <img src={key} alt="key" className={classes.iconKey} />
                    {item.appKey}
                  </span>
                  <span className={classes.copy}>Скопіювати</span>
                </div>
              </span>
            </li>
          );
        })}
        {newKeyIndex < filteredKeys.length && (
          <li className={classnames(classes.keyItem, classes.keyItemLast)}>
            <span className={classes.getMoreKeys} onClick={() => setNewKeyIndex(prevState => prevState + 1)}>
              Отримати ще один ключ доступу
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Keys;
