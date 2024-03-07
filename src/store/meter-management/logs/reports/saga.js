import { call, put, takeEvery } from "redux-saga/effects";
import { GET_ALERTS, GET_CSRP, GET_METER_STATUS, GET_CUM_REPORTS, GET_METER_TEST_REPORT } from "./actionTypes";
import {
  getAlertsSuccess,
  getAlertsFailed,
  getCsrpSuccess,
  getCsrpFailed,
  getMeterStatusSuccess,
  getMeterStatusFailed,
  getReportsSuccess,
  getReportsFailed,
  getMetaReports,
  getMeterTestReportSuccess,
  getMeterTestReportFailed,
  getMeterTestReportMeta,
} from "./actions";
import {
  readCookingSessionsAPI,
  readAlertsAPI,
  readCumulativeReportsAPI,
  readMeterStatusAPI,
  getMetersTestReportAPI,
} from "utils/api";

function* readCookingSessions(data) {
  try {
    const response = yield call(readCookingSessionsAPI, data.payload);
    const csrp = response.data.result;
    yield put(getCsrpSuccess(csrp.items));
    yield put(getMetaReports(csrp.meta));
  } catch (error) {
    yield put(getCsrpFailed(error));
  }
}

function* readMeterTestReports(data) {
  try {
    const response = yield call(getMetersTestReportAPI, data.payload);
    const reports = response.data.result;
    yield put(getMeterTestReportSuccess(reports.items));
    yield put(getMeterTestReportMeta(reports.meta));
  } catch (error) {
    yield put(getMeterTestReportFailed(error));
  }
}

function* readCumulativeReports(data) {
  try {
    const response = yield call(readCumulativeReportsAPI, data.payload);
    yield put(getReportsSuccess(response.data.result));
  } catch (error) {
    yield put(getReportsFailed(error));
  }
}
function* readAlerts(data) {
  try {
    const response = yield call(readAlertsAPI, data.payload);
    yield put(getAlertsSuccess(response.data.result.items));
  } catch (error) {
    yield put(getAlertsFailed(error));
  }
}

function* readMeterStatus(data) {
  try {
    const response = yield call(readMeterStatusAPI, data.payload);
    yield put(getMeterStatusSuccess(response.data.result));
  } catch (error) {
    yield put(getMeterStatusFailed(error));
  }
}

function* meterReportsSaga() {
  yield takeEvery(GET_CSRP, readCookingSessions);
  yield takeEvery(GET_ALERTS, readAlerts);
  yield takeEvery(GET_CUM_REPORTS, readCumulativeReports);
  yield takeEvery(GET_METER_STATUS, readMeterStatus);
  yield takeEvery(GET_METER_TEST_REPORT, readMeterTestReports);
}

export default meterReportsSaga;
