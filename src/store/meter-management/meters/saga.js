import { call, put, takeEvery } from "redux-saga/effects";
import { SEND_METER } from "./actionTypes";
import { sendMeterSuccess, sendMeterFailed } from "./actions";
import { triggerCumulativeReport } from "utils/api";

function* sendMeterCommands(data) {
  try {
    // const response = yield call(triggerSettingsReport, data.payload);
    // yield put(sendMeterSuccess(response.data))

    // const meterStatus = yield call(triggerMeterStatusReport, data.payload);
    // yield put(sendMeterSuccess(meterStatus.data))

    //let logs = yield call(triggerLogsReport, data.payload)
    // yield put(sendMeterSuccess(logs.data))

    // const hardware = yield call(triggerHardwareReport, data.payload);
    // yield put(sendMeterSuccess(hardware.data))

    // const csrp = yield call(triggerCookingSessionReport, data.payload);
    // yield put(sendMeterSuccess(csrp.data))

    const report = yield call(triggerCumulativeReport, data.payload);
    yield put(sendMeterSuccess(report.data));
  } catch (error) {
    yield put(sendMeterFailed(error));
  }
}

function* metersSaga() {
  yield takeEvery(SEND_METER, sendMeterCommands);
}

export default metersSaga;
