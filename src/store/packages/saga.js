import { call, put, takeEvery } from "redux-saga/effects";
import { GET_PACKAGES } from "./actionTypes";
import { getPackagesSuccess, getPackagesFail } from "./actions";
import { getPackages } from "utils/api";

function* fetchPackages() {
  try {
    const response = yield call(getPackages, { pageSize: 100 });
    yield put(getPackagesSuccess(response.data.result));
  } catch (error) {
    yield put(getPackagesFail(error));
  }
}

function* PackagesSaga() {
  yield takeEvery(GET_PACKAGES, fetchPackages);
}

export default PackagesSaga;
