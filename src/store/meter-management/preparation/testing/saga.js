import { call, put, takeEvery } from "redux-saga/effects"

import {
  ASSIGN_TASKS
} from "./actionTypes"

import {
  assignTasksFailed,
  assignTasksSuccess,
} from "./actions"

import {
  assignBulkTaskApi,
} from "utils/api"

function* putBulkTasks() {
  try {
    const response = yield call(assignBulkTaskApi)
    yield put(assignTasksSuccess(response.data.result.items)) 
  } catch (error) {
    yield put(assignTasksFailed(error))
  }
}

function* tasksSaga() {
  yield takeEvery(ASSIGN_TASKS, putBulkTasks)
}

export default tasksSaga
