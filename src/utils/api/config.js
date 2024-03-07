import axios from "axios";
import { authToken } from "./authToken";
import history from "./../../history";
import { warnMessage } from "components/Common/responses/message";

const responseSuccessHandler = response => response;

const responseErrorHandler = async error => {
  if (error?.response?.status === 401) {
    try {
      await tryToReLogin();
      const { config: oldRequest } = error;

      return await axios.request({
        ...oldRequest,
        headers: { Authorization: `Bearer ${authToken()}`, "Content-Type": "application/json" },
      });
    } catch (e) {
      localStorage.clear();
      history.push("/login");
      window.location.reload(true);
      warnMessage("Будь ласка, авторизуйтесь");
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
};

export const tryToReLogin = () =>
  new Promise((resolve, reject) => {
    axios
      .post(
        `https://dev.waveform-analyzer.com/api-v2/auth/refresh`,
        {},
        {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${authToken()}` },
        }
      )
      .then(
        response => {
          localStorage.setItem("authToken", JSON.stringify(response.data.token));
          localStorage.setItem("updateTime", JSON.stringify(Date.now()));
          resolve(true);
        },
        () => {
          if (localStorage.getItem("updateTime") > JSON.stringify(Date.now()) - 10000) {
            resolve(true);
          } else {
            reject(true);
          }
        }
      )
      .catch(() => {
        reject(true);
      });
  });

const getCustomResponse = config =>
  config.interceptors.response.use(
    response => responseSuccessHandler(response),
    async error => await responseErrorHandler(error)
  );

const getConfig = type => {
  const config = axios.create({
    baseURL: `https://dev.waveform-analyzer.com/api-v2/${type}`,
    responseType: "json",
  });
  config.defaults.headers.common["Authorization"] = `Bearer ${authToken()}`;
  config.defaults.headers.post["Content-Type"] = "application/json";

  getCustomResponse(config);
  return config;
};

const getAuthConfig = type => {
  const config = axios.create({
    baseURL: `https://dev.waveform-analyzer.com/api-v2/${type}`,
    responseType: "json",
  });
  config.defaults.headers.common["Authorization"] = `Bearer ${authToken()}`;
  config.defaults.headers.post["Content-Type"] = "application/json";

  return config;
};

export const authMicroservice = () => getAuthConfig("auth");
export const accountMicroservice = () => getConfig("account");
export const recoveryMicroservice = () => getConfig("recovery");
export const datasetsMicroservice = () => getConfig("datasets");
export const reportsMicroservice = () => getConfig("reports");
export const reportsViewerMicroservice = () => getConfig("reports-viewer");
export const storeMicroservice = () => getConfig("store");
export const sessionsMicroservice = () => getConfig("sessions");
