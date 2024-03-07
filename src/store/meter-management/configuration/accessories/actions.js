import {
  CREATE_ACCESSORY,
  CREATE_ACCESSORY_SUCCESS,
  CREATE_ACCESSORY_FAIL,
  READ_ACCESSORY,
  READ_ACCESSORY_SUCCESS,
  READ_ACCESSORY_FAIL,
  UPDATE_ACCESSORY,
  UPDATE_ACCESSORY_SUCCESS,
  UPDATE_ACCESSORY_FAIL,
  DELETE_ACCESSORY,
  DELETE_ACCESSORY_SUCCESS,
  DELETE_ACCESSORY_FAIL,
  GET_SENSORS,
  GET_SENSORS_SUCCESS,
  GET_SENSORS_FAIL,
  GET_MICROCONTROLLERS,
  GET_MICROCONTROLLERS_SUCCESS,
  GET_MICROCONTROLLERS_FAIL,
} from "./actionTypes";

export const createAccessory = data => ({
  type: CREATE_ACCESSORY,
  payload: data,
});
export const createAccessorySuccess = data => ({
  type: CREATE_ACCESSORY_SUCCESS,
  payload: data,
});
export const createAccessoryFailed = error => ({
  type: CREATE_ACCESSORY_FAIL,
  payload: error,
});

export const readAccessory = data => ({
  type: READ_ACCESSORY,
  payload: data,
});
export const readAccessorySuccess = data => ({
  type: READ_ACCESSORY_SUCCESS,
  payload: data,
});

export const readAccessoryFailed = error => ({
  type: READ_ACCESSORY_FAIL,
  payload: error,
});

export const getSensors = data => ({
  type: GET_SENSORS,
  payload: data,
});
export const getSensorsSuccess = data => ({
  type: GET_SENSORS_SUCCESS,
  payload: data,
});

export const getSensorsFailed = error => ({
  type: GET_SENSORS_FAIL,
  payload: error,
});

export const getMicrocontrollers = data => ({
  type: GET_MICROCONTROLLERS,
  payload: data,
});
export const getMicrocontrollersSuccess = data => ({
  type: GET_MICROCONTROLLERS_SUCCESS,
  payload: data,
});

export const getMicrocontrollersFailed = error => ({
  type: GET_MICROCONTROLLERS_FAIL,
  payload: error,
});

export const updateAccessory = data => ({
  type: UPDATE_ACCESSORY,
  payload: data,
});
export const updateAccessorySuccess = data => ({
  type: UPDATE_ACCESSORY_SUCCESS,
  payload: data,
});
export const updateAccessoryFailed = error => ({
  type: UPDATE_ACCESSORY_FAIL,
  payload: error,
});

export const deleteAccessory = data => ({
  type: DELETE_ACCESSORY,
  payload: data,
});
export const deleteAccessorySuccess = data => ({
  type: DELETE_ACCESSORY_SUCCESS,
  payload: data,
});
export const deleteAccessoryFailed = error => ({
  type: DELETE_ACCESSORY_FAIL,
  payload: error,
});
