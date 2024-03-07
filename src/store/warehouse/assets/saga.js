import { call, put, takeEvery } from "redux-saga/effects"

import {
  GET_ASSETS,
  CREATE_BULK_CARDS
} from "./actionTypes"

import {
  getAssetsFailed,
  getAssetsSuccess,
  createBulkCardsSuccess,
  createBulkCardsFailed
} from "./actions"

import {
  retrieveAllAssets,
  createBulkCardApi
} from "utils/api"

function* fetchAssets() {
  try {
    const response = yield call(retrieveAllAssets)
    yield put(getAssetsSuccess(response.data.result.items)) 
  } catch (error) {
    yield put(getAssetsFailed(error))
  }
}

function* createBulkCard(data){
  try {
    const response = yield call(createBulkCardApi, data.payload)
    yield put(createBulkCardsSuccess(response.data.result))
} catch (error) {
    yield put(createBulkCardsFailed(error))
}
}

function* assetsSaga() {
  yield takeEvery(GET_ASSETS, fetchAssets)
  yield takeEvery(CREATE_BULK_CARDS, createBulkCard)
}

export default assetsSaga
