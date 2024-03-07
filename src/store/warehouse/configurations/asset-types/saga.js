import { call, put, takeEvery } from "redux-saga/effects";
import { CREATE_ASSET_TYPE, GET_ASSET_TYPES } from "./actionTypes";
import { createAssetTypeFailed, createAssetTypeSuccess, getAssetTypesFailed, getAssetTypesSuccess } from "./actions";
import { createAssetType, fetchAssetTypesList } from "utils/api";

function* fetchAssetTypes() {
  try {
    const response = yield call(fetchAssetTypesList);
    yield put(getAssetTypesSuccess(response.data.result));
  } catch (error) {
    yield put(getAssetTypesFailed(error));
  }
}

function* putAssetType(data) {
  try {
    const updater = yield call(createAssetType, data.payload);

    if (updater) {
      yield put(createAssetTypeSuccess(updater.data.result));
      const response = yield call(fetchAssetTypesList);
      yield put(getAssetTypesSuccess(response.data.result));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Err from saga", error);
    yield put(createAssetTypeFailed(error));
  }
}

function* assetTypesSaga() {
  yield takeEvery(GET_ASSET_TYPES, fetchAssetTypes);
  yield takeEvery(CREATE_ASSET_TYPE, putAssetType);
}

export default assetTypesSaga;
