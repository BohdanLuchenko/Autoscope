import { put, takeEvery } from "redux-saga/effects";
import { CREATE_DEPOT, GET_DEPOT } from "./actionTypes";
import { createDepotSuccess, createDepotFailed, getDepotFailed, getDepotSuccess } from "./actions";

function* fetchDepot() {
  try {
    yield put(getDepotSuccess());
  } catch (error) {
    yield put(getDepotFailed(error));
  }
}

function* putDepot(data) {
  try {
    yield put(createDepotSuccess(data.payload));
  } catch (error) {
    yield put(createDepotFailed(error));
  }
}

function* DepotSaga() {
  yield takeEvery(GET_DEPOT, fetchDepot);
  yield takeEvery(CREATE_DEPOT, putDepot);
}

export default DepotSaga;
