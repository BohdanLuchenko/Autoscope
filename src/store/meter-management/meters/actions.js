import {
  SEND_METER,
  SEND_METER_SUCCESS,
  SEND_METER_FAIL,
  RESET_COMMAND_SUCCESS_GET,
  SET_ACTIVE_METER_SPARE_PART,
} from "./actionTypes";

export const resetCommandSuccessGet = () => ({
  type: RESET_COMMAND_SUCCESS_GET,
});
export const sendMeter = data => ({
  type: SEND_METER,
  payload: data,
});
export const sendMeterSuccess = data => ({
  type: SEND_METER_SUCCESS,
  payload: data,
});
export const sendMeterFailed = error => ({
  type: SEND_METER_FAIL,
  payload: error,
});

export const setActiveSparePart = data => ({
  type: SET_ACTIVE_METER_SPARE_PART,
  payload: data,
});
