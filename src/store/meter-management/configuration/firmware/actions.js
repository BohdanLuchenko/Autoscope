import {
  CREATE_FIRMWARE,
  CREATE_FIRMWARE_FAIL,
  CREATE_FIRMWARE_SUCCESS,
  DELETE_FIRMWARE,
  DELETE_FIRMWARE_FAIL,
  DELETE_FIRMWARE_SUCCESS,
  GET_FIRMWARES,
  GET_FIRMWARES_FAIL,
  GET_FIRMWARES_SUCCESS,
  UPDATE_FIRMWARE,
  UPDATE_FIRMWARE_FAIL,
  UPDATE_FIRMWARE_SUCCESS,
} from "./actionTypes";

export const getFirmwares = () => ({
  type: GET_FIRMWARES,
});
export const getFirmwaresSuccess = data => ({
  type: GET_FIRMWARES_SUCCESS,
  payload: data,
});
export const getFirmwaresFailed = error => ({
  type: GET_FIRMWARES_FAIL,
  payload: error,
});

export const createFirmware = data => ({
  type: CREATE_FIRMWARE,
  payload: data,
});
export const createFirmwareSuccess = data => ({
  type: CREATE_FIRMWARE_SUCCESS,
  payload: data,
});
export const createFirmwareFailed = error => ({
  type: CREATE_FIRMWARE_FAIL,
  payload: error,
});

export const updateFirmware = data => ({
  type: UPDATE_FIRMWARE,
  payload: data,
});
export const updateFirmwareSuccess = data => ({
  type: UPDATE_FIRMWARE_SUCCESS,
  payload: data,
});
export const updateFirmwareFailed = error => ({
  type: UPDATE_FIRMWARE_FAIL,
  payload: error,
});

export const deleteFirmware = data => ({
  type: DELETE_FIRMWARE,
  payload: data,
});
export const deleteFirmwareSuccess = data => ({
  type: DELETE_FIRMWARE_SUCCESS,
  payload: data,
});
export const deleteFirmwareFailed = error => ({
  type: DELETE_FIRMWARE_FAIL,
  payload: error,
});

// //Loaders && Refreshers
// export const startAction = (name, params) => ({
//   type: START_ACTION,
//   payload: {
//     action: { name, params }
//   }
// });
//
// export const stopAction = (name,params) => ({
//   type: STOP_ACTION,
//   payload: {
//     action: { name, params }
//   }
//
// });
//
// export const refreshActionStart = refreshAction => ({
//   type: REFRESH_ACTION_START,
//   payload: { refreshAction }
// });
//
// export const refreshActionStop = refreshAction => ({
//   type: REFRESH_ACTION_STOP,
//   payload: { refreshAction }
// });
