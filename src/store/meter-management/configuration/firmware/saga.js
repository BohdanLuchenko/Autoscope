import {call, put, takeEvery} from "redux-saga/effects";
import {createFirmware, deleteFirmware, fetchFirmwares, updateFirmware} from "../../../../utils/api";
import {CREATE_FIRMWARE, DELETE_FIRMWARE, GET_FIRMWARES, UPDATE_FIRMWARE} from "./actionTypes";
import {
  createFirmwareFailed,
  createFirmwareSuccess,
  deleteFirmwareFailed,
  deleteFirmwareSuccess,
  getFirmwaresFailed,
  getFirmwaresSuccess,
  updateFirmwareFailed,
  updateFirmwareSuccess,
} from "./actions";

function* receiveFirmwares() {
  try {
    const response = yield call(fetchFirmwares);

    yield put(getFirmwaresSuccess(response.data.result));
  } catch (error) {
    yield put(getFirmwaresFailed(error));
  }
}
function* putFirmware(data) {
  try {
    const updater = yield call(createFirmware, data.payload);
    if (updater) {
      yield put(createFirmwareSuccess(updater.data.result));
      const response = yield call(fetchFirmwares);
      yield put(getFirmwaresSuccess(response.data.result));
    }
  } catch (error) {
    yield put(createFirmwareFailed(error));
  }
}

function* changeFirmware(data) {
  try {
    const updater = yield call(updateFirmware, data.payload);
    if (updater) {
      yield put(updateFirmwareSuccess(updater.data.result));
      const response = yield call(fetchFirmwares);
      yield put(getFirmwaresSuccess(response.data.result));
    }
  } catch (error) {
    yield put(updateFirmwareFailed(error));
  }
}

function* removeFirmware(data) {
  try {
    const updater = yield call(deleteFirmware, data.payload);
    if (updater) {
      yield put(deleteFirmwareSuccess(updater.data.result));
      const response = yield call(fetchFirmwares);
      yield put(getFirmwaresSuccess(response.data.result));
    }
  } catch (error) {
    yield put(deleteFirmwareFailed(error));
  }
}

function* firmwareSaga() {
  yield takeEvery(GET_FIRMWARES, receiveFirmwares);
  yield takeEvery(CREATE_FIRMWARE, putFirmware);
  yield takeEvery(UPDATE_FIRMWARE, changeFirmware);
  yield takeEvery(DELETE_FIRMWARE, removeFirmware);
}

export default firmwareSaga;
