import { call, put, takeEvery } from "redux-saga/effects";
import { GET_TSR_LIST } from "./actionTypes";
import { getTSRListSuccess, getTSRListFail } from "./actions";
import { getUsersList } from "utils/api";
import { USER_LIST_PARAMS } from "utils/constants";

function* fetchTSRList() {
  try {
    const response = yield call(getUsersList, USER_LIST_PARAMS);
    yield put(getTSRListSuccess(response.data.result));
  } catch (error) {
    yield put(getTSRListFail(error));
  }
}

function* TSRSaga() {
  yield takeEvery(GET_TSR_LIST, fetchTSRList);
}

export default TSRSaga;
