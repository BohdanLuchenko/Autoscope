import {
  GET_DEPOT,
  GET_DEPOT_FAIL,
  GET_DEPOT_SUCCESS,
  CREATE_DEPOT,
  CREATE_DEPOT_SUCCESS,
  CREATE_DEPOT_FAIL,
} from "./actionTypes"

export const getDepot = () => ({
  type: GET_DEPOT,
})

export const getDepotSuccess = questions => ({
  type: GET_DEPOT_SUCCESS,
  payload: questions,
})

export const getDepotFailed = error => ({
  type: GET_DEPOT_FAIL,
  payload: error,
})

export const createDepot = (data) => ({
  type: CREATE_DEPOT,
  payload: data
})

export const createDepotSuccess = data => ({
  type: CREATE_DEPOT_SUCCESS,
  payload: data,
})

export const createDepotFailed = (data) => ({
  type: CREATE_DEPOT_FAIL,
  payload: data,
})

