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

const INIT_STATE = {
  alerts: [],
  csrp: [],
  reports: [],
  meterStatus: [],
  testReports: [],
  meta: {},
  testReportsMeta: {},
  loadingAlerts: false,
  loadingCsrp: false,
  loadingReports: false,
  loadingMeterStatus: false,
  loadingTestReports: false,
  alertsSuccessGet: false,
  csrpSuccessGet: false,
  reportsSuccessGet: false,
  meterSuccessGet: false,
  testReportsSuccessGet: false,
  alertsError: null,
  csrpError: null,
  reportsError: null,
  meterError: null,
  testReportsError: null,
};

const MeterReports = (state = INIT_STATE, action) => {
  switch (action.type) {
    //GET ALERTS
    case GET_ALERTS:
      return {
        ...state,
        loadingAlerts: true,
        alertsSuccessGet: false,
        alertsError: null,
      };

    case GET_ALERTS_SUCCESS:
      return {
        ...state,
        alerts: action.payload,
        loadingAlerts: false,
        alertsSuccessGet: true,
      };
    case GET_ALERTS_FAIL:
      return {
        ...state,
        accessoryError: action.payload,
        loadingAlerts: false,
      };
    //GET CSRP
    case GET_CSRP:
      return {
        ...state,
        loadingCsrp: true,
        csrpSuccessGet: false,
        csrpError: null,
      };
    case GET_CSRP_SUCCESS:
      return {
        ...state,
        csrp: action.payload,
        csrpSuccessGet: true,
        loadingCsrp: false,
      };
    case RESET_CSRP:
      return {
        ...state,
        csrp: [],
      };
    case GET_CSRP_FAIL:
      return {
        ...state,
        csrpError: action.payload,
        loadingCsrp: false,
      };
    case GET_META:
      return {
        ...state,
        meta: action.payload,
        loadingCsrp: false,
      };

    // GET CUM REPORTS
    case GET_CUM_REPORTS:
      return {
        ...state,
        loadingReports: true,
        reportsSuccessGet: false,
        reportsError: null,
      };
    case GET_CUM_REPORTS_SUCCESS:
      return {
        ...state,
        reports: action.payload,
        loadingReports: false,
        reportsSuccessGet: true,
        reportsError: null,
      };
    case GET_CUM_REPORTS_FAIL:
      return {
        ...state,
        reportsError: action.payload,
        loadingReports: false,
      };
    // GET METER STATUS
    case GET_METER_STATUS:
      return {
        ...state,
        loadingMeterStatus: true,
      };

    case GET_METER_STATUS_SUCCESS:
      return {
        ...state,
        meterSuccessGet: true,
        meterStatus: action.payload,
        loadingMeterStatus: false,
      };
    case GET_METER_STATUS_FAIL:
      return {
        ...state,
        meterError: action.payload,
        loadingMeterStatus: false,
      };

    //GET METER TEST REPORTS
    case GET_METER_TEST_REPORT:
      return {
        ...state,
        loadingTestReports: true,
        testReportsSuccessGet: false,
        testReportsError: null,
      };
    case GET_METER_TEST_REPORT_SUCCESS:
      return {
        ...state,
        testReports: action.payload,
        testReportsSuccessGet: true,
        loadingTestReports: false,
      };
    case GET_METER_TEST_REPORT_FAIL:
      return {
        ...state,
        testReportsError: action.payload,
        loadingTestReports: false,
      };
    case GET_METER_TEST_REPORT_META:
      return {
        ...state,
        testReportsMeta: action.payload,
        loadingTestReports: false,
      };

    default:
      return state;
  }
};

export default MeterReports;
