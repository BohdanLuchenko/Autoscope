import { notification } from "antd";

const additionalConfigs = {
  placement: "top",
  className: "ngi-notification",
};

const DURATION_SEC = 2.5;

export const errorMessage = (message, duration = DURATION_SEC) =>
  notification.error({
    message,
    duration,
    ...additionalConfigs,
  });

export const warnMessage = (message, duration = DURATION_SEC) =>
  notification.warn({
    message,
    duration,
    ...additionalConfigs,
  });

const getFormattedErrorObject = obj => {
  let str = "";
  for (const [key, value] of Object.entries(obj)) {
    str = `${str}${key.toUpperCase()}: ${value}`;
  }
  return str;
};
export const defaultErrorMethod = (error, duration = DURATION_SEC) => {
  let errMessage;

  if (
    !!error.response?.data?.errors?.length &&
    !!error.response?.data?.errors[0]?.code &&
    error.response?.data?.errors[0]?.code === "ACCESS_DENIED"
  ) {
    return;
  }

  if (error.response?.data?.errors) {
    if (typeof error.response?.data?.errors === "object") {
      errMessage = getFormattedErrorObject(error.response?.data?.errors);
    } else if (typeof error.response?.data?.errors === "string") errMessage = error.response?.data?.errors;
    else if (!!error.response?.data?.result) errMessage = `${error.response?.data?.errors[0]["desc"]}`;
    else if (error.response?.data?.errors.length > 1) {
      const messages = error.response?.data?.errors.map(item => {
        if (!!error.response?.data?.errors[0]?.items) {
          return `${item["desc"]}, ${item?.items.join(", ")}`;
        }
        return item["desc"];
      });
      return messages.forEach(errorMessage);
    } else if (!!error.response?.data?.errors[0]?.items) {
      const items = error.response.data.errors[0].items.map(item => {
        if (!!item?.partName) return `${item.partName} - ${item?.count}`;
        return item;
      });
      errMessage = `${error.response?.data?.errors[0]["desc"]}, ${items.join(", ")}`;
    } else errMessage = error.response?.data?.errors[0]["desc"];
    return errorMessage(errMessage, duration);
  } else if (error.response?.data?.message) {
    errMessage = error.response?.data?.message;
    if (errMessage === "Unauthorized") return;
    return errorMessage(errMessage, duration);
  } else if (error.request) {
    // The request was made but no response was received
    errMessage = "Not Found";
    return warnMessage(errMessage);
  }
  // Something happened in setting up the request that triggered an Error
  errMessage = error.message;
  return errorMessage(errMessage, duration);
};
