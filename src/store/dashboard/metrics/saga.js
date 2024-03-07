import { call, put, takeEvery } from "redux-saga/effects"
import {
  GET_TOP_REGIONS_STATS,
  GET_APPROVAL_STATS,
  GET_DAILY_STATS,
  GET_REG_BY_STATUS_STATS,
  GET_LEAD_TRENDS
} from "./actionTypes"

import {
  getTopDepotsFail, getTopDepotsSuccess,
  getApprovalStatsFail,
  getApprovalStatsSuccess,
  getDailyStatsFail,
  getDailyStatsSuccess,
  getRegByStatusStatsFail,
  getRegByStatusStatsSuccess, getLeadTrendsSuccess, getLeadTrendsFail
} from "./actions"
import {
  fetchApprovalMetrics,
  fetchDailyMetrics,
  fetchAssetsTrendMetrics,
  fetchRegByStatusMetrics,
  fetchTopDepotsMetrics
} from "utils/api"

function* fetchTopRegionsStats() {
  try {
    const response = yield call(fetchTopDepotsMetrics)
    yield put(getTopDepotsSuccess(response.data))
  } catch (error) {
    yield put(getTopDepotsFail(error))
  }
}

function* fetchRegStats() {
  try {
    const response = yield call(fetchRegByStatusMetrics)
    yield put(getRegByStatusStatsSuccess(response.data))
  } catch (error) {
    yield put(getRegByStatusStatsFail(error))
  }
}

function* fetchAssetTrends() {
  try {
    const response = yield call(fetchAssetsTrendMetrics)
    yield put(getAssetTrendsSuccess(response.data))
  } catch (error) {
    yield put(getAssetTrendsFail(error))
  }
}

function* fetchDailyStats() {
  try {
    const response = yield call(fetchDailyMetrics)
    yield put(getDailyStatsSuccess(response.data.stats))
  } catch (error) {
    yield put(getDailyStatsFail(error))
  }
}

function* fetchApprovalStats() {
  try {
    const response = yield call(fetchApprovalMetrics)
    yield put(getApprovalStatsSuccess(response.data))
  } catch (error) {
    yield put(getApprovalStatsFail(error))
  }
}

function* metricsSaga() {
  yield takeEvery(GET_REG_BY_STATUS_STATS, fetchRegStats)
  yield takeEvery(GET_DAILY_STATS, fetchDailyStats)
  yield takeEvery(GET_APPROVAL_STATS, fetchApprovalStats)
  yield takeEvery(GET_TOP_REGIONS_STATS, fetchTopRegionsStats)
  yield takeEvery(GET_LEAD_TRENDS, fetchAssetTrends)
}

export default metricsSaga;
