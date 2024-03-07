import { call, put, takeEvery } from "redux-saga/effects";
import { CREATE_SETTINGS, READ_SETTINGS, UPDATE_SETTINGS, DELETE_SETTINGS } from "./actionTypes";
import {
  createSettingsSuccess,
  createSettingsFailed,
  readSettingsSuccess,
  readSettingsFailed,
  updateSettingsSuccess,
  updateSettingsFailed,
  deleteSettingsSuccess,
  deleteSettingsFailed,
} from "./actions";
import { createSettingsAPI, updateSettingsAPI, deleteSettingsAPI, readSettingsAPI } from "utils/api";

function* createSettings(data) {
  try {
    const updater = yield call(createSettingsAPI, data.payload);

    if (updater) {
      yield put(createSettingsSuccess(updater.data.result));
      const response = yield call(readSettingsAPI);
      yield put(readSettingsSuccess(response.data.result));
    }
  } catch (error) {
    yield put(createSettingsFailed(error));
  }
}

function* readSettings() {
  try {
    const response = yield call(readSettingsAPI);
    const accessories = response.data.result;
    yield put(readSettingsSuccess(accessories));
  } catch (error) {
    yield put(readSettingsFailed(error));
  }
}

function* updateSettings(data) {
  try {
    const updater = yield call(updateSettingsAPI, data.payload);

    if (updater.status === 200) {
      yield put(updateSettingsSuccess(data.payload));
      const response = yield call(readSettingsAPI);
      yield put(readSettingsSuccess(response.data.result));
    }
  } catch (error) {
    yield put(updateSettingsFailed(error));
  }
}

function* deleteSettings(data) {
  try {
    const updater = yield call(deleteSettingsAPI, data.payload);

    if (updater.status === 204) {
      const Settings = data.payload;
      const { type, description } = Settings;
      const payload = { type: type, description: description };
      yield put(deleteSettingsSuccess(payload));
      const response = yield call(readSettingsAPI);
      yield put(readSettingsSuccess(response.data.result));
    }
  } catch (error) {
    yield put(deleteSettingsFailed(error));
  }
}

function* globalSettingsSaga() {
  yield takeEvery(CREATE_SETTINGS, createSettings);
  yield takeEvery(READ_SETTINGS, readSettings);
  yield takeEvery(UPDATE_SETTINGS, updateSettings);
  yield takeEvery(DELETE_SETTINGS, deleteSettings);
}

export default globalSettingsSaga;
