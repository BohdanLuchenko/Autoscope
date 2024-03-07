import { call, put, takeEvery } from "redux-saga/effects";

import {
  CREATE_METER,
  UPDATE_METER,
  GET_METERS,
  GET_METER_DETAIL,
  POST_METER_REPORT,
  GET_METER_REPORT,
} from "./actionTypes";

import {
  registerMeterSuccess,
  registerMeterFailed,
  updateMeterSuccess,
  updateMeterFailed,
  getMetersSuccess,
  getMetersFailed,
  getMeterDetailsSuccess,
  getMeterDetailsFailed,
  getMeta,
  getMeterReportSuccess,
  getMeterReportFailed,
  postMeterReportSuccess,
  postMeterReportFailed,
} from "./actions";

import {
  createMeterAPI,
  registerMeterAPI,
  postMeterTestReportAPI,
  getMetersTestReportAPI,
  retrieveMeters,
  retrieveMeterDetails,
  updateMeter,
} from "utils/api";

function* createMeter(data) {
  try {
    const payload = Object.fromEntries(
      Object.entries(data.payload).filter(([key]) => !key.includes("serial") && !key.includes("type"))
    );
    const response = yield call(createMeterAPI, { ...payload, qrCode: payload.barcode, type: "Meter" });

    if (response) {
      const id = response.data.result.id;
      const allowed = ["type", "barcode", "serial"];
      const raw = data.payload;
      const filtered = Object.keys(raw)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});
      const resp = yield call(registerMeterAPI, { ...filtered, id: id });
      yield put(registerMeterSuccess(resp));

      const metersArray = yield call(retrieveMeters, data.payload);
      yield put(getMetersSuccess(metersArray.data.result.items));
      yield put(getMeta(metersArray.data.result.meta));
    }
  } catch (error) {
    yield put(registerMeterFailed(error));
  }
}

function* getMeters(data) {
  try {
    const response = yield call(retrieveMeters, data.payload);
    yield put(getMetersSuccess(response.data.result.items));
    yield put(getMeta(response.data.result.meta));
  } catch (error) {
    yield put(getMetersFailed(error));
  }
}

function* getMeterDetails(data) {
  try {
    const response = yield call(retrieveMeterDetails, data.payload);
    yield put(getMeterDetailsSuccess(response.data.result));
  } catch (error) {
    yield put(getMeterDetailsFailed(error));
  }
}

function* updateMeterSaga(data) {
  try {
    const response = yield call(updateMeter, data.payload.id, data.payload);
    if (response["status"] === 200) {
      //yield put(updateMeterSuccess(response.data.result.items))
      const metersArray = yield call(retrieveMeters, { barcode: data["payload"]["barcode"] });
      yield put(updateMeterSuccess(metersArray.data.result.items));
      yield put(getMetersSuccess(metersArray.data.result.items));
      yield put(getMeta(metersArray.data.result.meta));
    }
  } catch (error) {
    yield put(updateMeterFailed(error));
    const metersArray = yield call(retrieveMeters, { condition: "Not Tested" });
    yield put(getMetersSuccess(metersArray.data.result.items));
    yield put(getMeta(metersArray.data.result.meta));
  }
}

function* postMeterReportSaga(data) {
  try {
    const response = yield call(postMeterTestReportAPI, data.payload);
    yield put(postMeterReportSuccess(response.data.result));
    const metersArray = yield call(retrieveMeters, { condition: "Not Tested" });
    yield put(getMetersSuccess(metersArray.data.result.items));
    yield put(getMeta(metersArray.data.result.meta));
  } catch (error) {
    yield put(postMeterReportFailed(error));
  }
}

function* getMeterReportSaga(data) {
  try {
    const response = yield call(getMetersTestReportAPI, data.payload);
    yield put(getMeterReportSuccess(response.data.result.items));
  } catch (error) {
    yield put(getMeterReportFailed(error));
  }
}

function* meterRegistrationSaga() {
  yield takeEvery(CREATE_METER, createMeter);
  yield takeEvery(GET_METERS, getMeters);
  yield takeEvery(GET_METER_DETAIL, getMeterDetails);
  yield takeEvery(UPDATE_METER, updateMeterSaga);
  yield takeEvery(POST_METER_REPORT, postMeterReportSaga);
  yield takeEvery(GET_METER_REPORT, getMeterReportSaga);
}

export default meterRegistrationSaga;
