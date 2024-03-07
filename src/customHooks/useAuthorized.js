import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

const useAuthorized = () => {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const history = useHistory();

  const checkUser = useCallback(() => {
    if (!localStorage.getItem("b2c:authUser")) {
      setIsAuthorized(false);
    }
  }, []);

  useEffect(() => {
    if (!isAuthorized) {
      localStorage.clear();
      history.push("/login");
    }
  }, [isAuthorized]);

  useEffect(
    () =>
      history.listen(() => {
        checkUser();
      }),
    [history]
  );

  useEffect(() => {
    checkUser();
  }, []);

  return [isAuthorized];
};

export default useAuthorized;
