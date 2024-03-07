import { call, put, takeEvery } from "redux-saga/effects"
import { GET_STATS } from "./actionTypes"

import {
  getStatsFail,
  getStatsSuccess
} from "./actions"
import { getStats } from "utils/api"

function* fetchStats() {
  try {
    const response = yield call(getStats)
    yield put(getStatsSuccess(response.data))
  } catch (error) {
    yield put(getStatsFail(error))
  }
}

function* statsSaga() {
  yield takeEvery(GET_STATS, fetchStats)
}

export default statsSaga;
