import {
  GET_ALERTS,
  GET_ALERTS_SUCCESS,
  GET_ALERTS_FAIL,
  GET_CSRP,
  GET_CSRP_SUCCESS,
  GET_CSRP_FAIL,
  GET_CUM_REPORTS,
  GET_CUM_REPORTS_SUCCESS,
  GET_CUM_REPORTS_FAIL,
  GET_METER_STATUS,
  GET_METER_STATUS_SUCCESS,
  GET_METER_STATUS_FAIL,
  GET_META,
  GET_METER_TEST_REPORT,
  GET_METER_TEST_REPORT_SUCCESS,
  GET_METER_TEST_REPORT_FAIL,
  GET_METER_TEST_REPORT_META,
  RESET_CSRP,
} from "./actionTypes";

export const getAlerts = data => ({
  type: GET_ALERTS,
  payload: data,
});
export const getAlertsSuccess = data => ({
  type: GET_ALERTS_SUCCESS,
  payload: data,
});
export const getAlertsFailed = error => ({
  type: GET_ALERTS_FAIL,
  payload: error,
});

export const getCsrp = data => ({
  type: GET_CSRP,
  payload: data,
});

export const resetCsrp = () => ({
  type: RESET_CSRP,
});
export const getCsrpSuccess = data => ({
  type: GET_CSRP_SUCCESS,
  payload: data,
});

export const getCsrpFailed = error => ({
  type: GET_CSRP_FAIL,
  payload: error,
});

export const getReports = data => ({
  type: GET_CUM_REPORTS,
  payload: data,
});
export const getReportsSuccess = data => ({
  type: GET_CUM_REPORTS_SUCCESS,
  payload: data,
});

export const getReportsFailed = error => ({
  type: GET_CUM_REPORTS_FAIL,
  payload: error,
});

export const getMeterStatus = data => ({
  type: GET_METER_STATUS,
  payload: data,
});
export const getMeterStatusSuccess = data => ({
  type: GET_METER_STATUS_SUCCESS,
  payload: data,
});

export const getMeterStatusFailed = error => ({
  type: GET_METER_STATUS_FAIL,
  payload: error,
});

export const getMetaReports = meta => ({
  type: GET_META,
  payload: meta,
});

export const getMeterTestReport = data => ({
  type: GET_METER_TEST_REPORT,
  payload: data,
});
export const getMeterTestReportSuccess = data => ({
  type: GET_METER_TEST_REPORT_SUCCESS,
  payload: data,
});

export const getMeterTestReportFailed = error => ({
  type: GET_METER_TEST_REPORT_FAIL,
  payload: error,
});

export const getMeterTestReportMeta = meta => ({
  type: GET_METER_TEST_REPORT_META,
  payload: meta,
});
