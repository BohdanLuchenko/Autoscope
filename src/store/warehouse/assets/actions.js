import {
  GET_ASSETS_FAIL,
  GET_ASSETS_SUCCESS,
  GET_ASSETS,
  CREATE_BULK_CARDS,
  CREATE_BULK_CARDS_SUCCESS,
  CREATE_BULK_CARDS_FAIL
} from "./actionTypes"

export const getAssets = () => ({
  type: GET_ASSETS,
})

export const getAssetsSuccess = assets => ({
  type: GET_ASSETS_SUCCESS,
  payload: assets,
})

export const getAssetsFailed = error => ({
  type: GET_ASSETS_FAIL,
  payload: error,
})

export const createBulkCards = (data) => ({
  type: CREATE_BULK_CARDS,
  payload: data
})

export const createBulkCardsSuccess = data => ({
  type: CREATE_BULK_CARDS_SUCCESS,
  payload: data,
})

export const createBulkCardsFailed = error => ({
  type: CREATE_BULK_CARDS_FAIL,
  payload: error,
})

