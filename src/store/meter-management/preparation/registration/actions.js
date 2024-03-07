import {
  CREATE_METER,CREATE_METER_FAIL,CREATE_METER_SUCCESS,
  REGISTER_METER,REGISTER_METER_FAIL,REGISTER_METER_SUCCESS,
  GET_METERS,GET_METERS_FAIL,GET_METERS_SUCCESS,
  GET_METER_DETAIL,GET_METER_DETAIL_FAIL,GET_METER_DETAIL_SUCCESS, UPDATE_METER, UPDATE_METER_SUCCESS,GET_META, UPDATE_METER_FAIL, POST_METER_REPORT, POST_METER_REPORT_SUCCESS, POST_METER_REPORT_FAIL, GET_METER_REPORT, GET_METER_REPORT_SUCCESS, GET_METER_REPORT_FAIL
} from "./actionTypes"

export const createMeter = (data) => ({
  type: CREATE_METER,
  payload: data
})

export const createMeterSuccess = data => ({
  type: CREATE_METER_SUCCESS,
  payload: data,
})

export const createMeterFailed = error => ({
  type: CREATE_METER_FAIL,
  payload: error,
})

export const registerMeter = (data) => ({
  type: REGISTER_METER,
  payload: data
})

export const registerMeterSuccess = data => ({
  type: REGISTER_METER_SUCCESS,
  payload: data,
})

export const registerMeterFailed = error => ({
  type: REGISTER_METER_FAIL,
  payload: error,
})

export const getMeters = (data) => ({
  type: GET_METERS,
  payload: data
})

export const getMetersSuccess = data => ({
  type: GET_METERS_SUCCESS,
  payload: data,
})

export const getMetersFailed = error => ({
  type: GET_METERS_FAIL,
  payload: error,
})

export const getMeterDetails = (data) => ({
  type: GET_METER_DETAIL,
  payload: data
})

export const getMeterDetailsSuccess = data => ({
  type: GET_METER_DETAIL_SUCCESS,
  payload: data,
})

export const getMeterDetailsFailed = error => ({
  type: GET_METER_DETAIL_FAIL,
  payload: error,
})

export const updateMeter = (data) => ({
  type: UPDATE_METER,
  payload: data
})

export const updateMeterSuccess = data => ({
  type: UPDATE_METER_SUCCESS,
  payload: data,
})

export const updateMeterFailed = error => ({
  type: UPDATE_METER_FAIL,
  payload: error,
})

export const getMeta = data => ({
  type: GET_META,
  payload: data,
})

/* Meter Test Reports Actions */
export const postMeterReport = (data) => ({
  type: POST_METER_REPORT,
  payload: data
})

export const postMeterReportSuccess = data => ({
  type: POST_METER_REPORT_SUCCESS,
  payload: data,
})

export const postMeterReportFailed = error => ({
  type: POST_METER_REPORT_FAIL,
  payload: error,
})

export const getMeterReport = (data) => ({
  type: GET_METER_REPORT,
  payload: data
})

export const getMeterReportSuccess = data => ({
  type: GET_METER_REPORT_SUCCESS,
  payload: data,
})

export const getMeterReportFailed = error => ({
  type: GET_METER_REPORT_FAIL,
  payload: error,
})