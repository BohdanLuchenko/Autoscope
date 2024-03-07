import {
  GET_ASSET_TYPES_FAIL,
  GET_ASSET_TYPES_SUCCESS,
  GET_ASSET_TYPES,
  UPDATE_ASSET_TYPE_FAIL,
  UPDATE_ASSET_TYPE_SUCCESS,
  UPDATE_ASSET_TYPE,
  CREATE_ASSET_TYPE_FAIL,
  CREATE_ASSET_TYPE_SUCCESS,
  CREATE_ASSET_TYPE,
  START_ACTION,
  STOP_ACTION,
  REFRESH_ACTION_START,
  REFRESH_ACTION_STOP
} from "./actionTypes"

export const getAssetTypes = () => ({
  type: GET_ASSET_TYPES,
})

export const getAssetTypesSuccess = questions => ({
  type: GET_ASSET_TYPES_SUCCESS,
  payload: questions,
})

export const getAssetTypesFailed = error => ({
  type: GET_ASSET_TYPES_FAIL,
  payload: error,
})

export const createAssetType = (data) => ({
  type: CREATE_ASSET_TYPE,
  payload: data
})

export const createAssetTypeSuccess = data => ({
  type: CREATE_ASSET_TYPE_SUCCESS,
  payload: data,
})

export const createAssetTypeFailed = (data) => ({
  type: CREATE_ASSET_TYPE_FAIL,
  payload: data,
})

export const updateAssetType = (data) => ({
  type: UPDATE_ASSET_TYPE,
  payload: data
})

export const updateAssetTypeSuccess = data => ({
  type: UPDATE_ASSET_TYPE_SUCCESS,
  payload: data,
})

export const updateAssetTypeFailed = error => ({
  type: UPDATE_ASSET_TYPE_FAIL,
  payload: error,
})

//Loaders && Refreshers
export const startAction = (name, params) => ({
  type: START_ACTION,
  payload: {
    action: { name, params }
  }
});

export const stopAction = (name,params) => ({
  type: STOP_ACTION,
  payload: {
    action: { name, params }
  }
   
});

export const refreshActionStart = refreshAction => ({
  type: REFRESH_ACTION_START,
  payload: { refreshAction }
});

export const refreshActionStop = refreshAction => ({
  type: REFRESH_ACTION_STOP,
  payload: { refreshAction }
});
