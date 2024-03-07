import {
  CREATE_SETTINGS,
  CREATE_SETTINGS_SUCCESS,
  CREATE_SETTINGS_FAIL,
  READ_SETTINGS,
  READ_SETTINGS_SUCCESS,
  READ_SETTINGS_FAIL,
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_FAIL,
  DELETE_SETTINGS,
  DELETE_SETTINGS_SUCCESS,
  DELETE_SETTINGS_FAIL,
} from "./actionTypes";

export const createSettings = data => ({
  type: CREATE_SETTINGS,
  payload: data,
});
export const createSettingsSuccess = data => ({
  type: CREATE_SETTINGS_SUCCESS,
  payload: data,
});
export const createSettingsFailed = error => ({
  type: CREATE_SETTINGS_FAIL,
  payload: error,
});

export const readSettings = () => ({
  type: READ_SETTINGS,
});
export const readSettingsSuccess = data => ({
  type: READ_SETTINGS_SUCCESS,
  payload: data,
});

export const readSettingsFailed = error => ({
  type: READ_SETTINGS_FAIL,
  payload: error,
});

export const updateSettings = data => ({
  type: UPDATE_SETTINGS,
  payload: data,
});
export const updateSettingsSuccess = data => ({
  type: UPDATE_SETTINGS_SUCCESS,
  payload: data,
});
export const updateSettingsFailed = error => ({
  type: UPDATE_SETTINGS_FAIL,
  payload: error,
});

export const deleteSettings = data => ({
  type: DELETE_SETTINGS,
  payload: data,
});
export const deleteSettingsSuccess = data => ({
  type: DELETE_SETTINGS_SUCCESS,
  payload: data,
});
export const deleteSettingsFailed = error => ({
  type: DELETE_SETTINGS_FAIL,
  payload: error,
});
