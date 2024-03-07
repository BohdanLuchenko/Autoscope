import { call, put, takeEvery } from "redux-saga/effects";
import {
  CREATE_ACCESSORY,
  READ_ACCESSORY,
  UPDATE_ACCESSORY,
  DELETE_ACCESSORY,
  GET_SENSORS,
  GET_MICROCONTROLLERS,
} from "./actionTypes";
import {
  createAccessorySuccess,
  createAccessoryFailed,
  readAccessorySuccess,
  readAccessoryFailed,
  updateAccessorySuccess,
  updateAccessoryFailed,
  deleteAccessorySuccess,
  deleteAccessoryFailed,
  getSensorsSuccess,
  getMicrocontrollersSuccess,
  getMicrocontrollersFailed,
  getSensorsFailed,
} from "./actions";
import { createAccessoryAPI, readAccessoriesAPI, updateAccessoryAPI, deleteAccessoryAPI } from "utils/api";

function* createAccessory(data) {
  try {
    const updater = yield call(createAccessoryAPI, data.payload);

    if (updater) {
      yield put(createAccessorySuccess(updater.data.result));
      const accessory = data.payload;
      const { type, description, accessoryType } = accessory;
      const payload = { type: type, description: description };
      yield put(updateAccessorySuccess(payload));
      const options = { payload: accessoryType };
      const response = yield call(readAccessoriesAPI, options);
      yield put(readAccessorySuccess(response.data.result));
    }
  } catch (error) {
    yield put(createAccessoryFailed(error));
  }
}

function* readAccessory(data) {
  try {
    const response = yield call(readAccessoriesAPI, data);
    const accessories = response.data.result;
    yield put(readAccessorySuccess(accessories));
  } catch (error) {
    yield put(readAccessoryFailed(error));
  }
}

function* readSensors(data) {
  try {
    const response = yield call(readAccessoriesAPI, data);
    yield put(getSensorsSuccess(response.data.result));
  } catch (error) {
    yield put(getSensorsFailed(error));
  }
}
function* readMicrocontrollers(data) {
  try {
    const response = yield call(readAccessoriesAPI, data);
    yield put(getMicrocontrollersSuccess(response.data.result));
  } catch (error) {
    yield put(getMicrocontrollersFailed(error));
  }
}

function* updateAccessory(data) {
  try {
    const updater = yield call(updateAccessoryAPI, data.payload);

    if (updater.status === 204) {
      const accessory = data.payload;
      const { type, description, accessoryType } = accessory;
      const payload = { type: type, description: description };
      yield put(updateAccessorySuccess(payload));
      const options = { payload: accessoryType };
      const response = yield call(readAccessoriesAPI, options);
      yield put(readAccessorySuccess(response.data.result));
    }
  } catch (error) {
    yield put(updateAccessoryFailed(error));
  }
}

function* deleteAccessory(data) {
  try {
    const updater = yield call(deleteAccessoryAPI, data.payload);

    if (updater.status === 204) {
      const accessory = data.payload;
      const { type, description, accessoryType } = accessory;
      const payload = { type: type, description: description };
      yield put(deleteAccessorySuccess(payload));
      const options = { payload: accessoryType };
      const response = yield call(readAccessoriesAPI, options);
      yield put(readAccessorySuccess(response.data.result));
    }
  } catch (error) {
    yield put(deleteAccessoryFailed(error));
  }
}

function* accessoriesSaga() {
  yield takeEvery(CREATE_ACCESSORY, createAccessory);
  yield takeEvery(READ_ACCESSORY, readAccessory);
  yield takeEvery(GET_SENSORS, readSensors);
  yield takeEvery(GET_MICROCONTROLLERS, readMicrocontrollers);
  yield takeEvery(UPDATE_ACCESSORY, updateAccessory);
  yield takeEvery(DELETE_ACCESSORY, deleteAccessory);
}

export default accessoriesSaga;
