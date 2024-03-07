import {
  CREATE_METER,
  CREATE_METER_FAIL,
  REGISTER_METER,
  REGISTER_METER_FAIL,
  REGISTER_METER_SUCCESS,
  GET_METERS,
  GET_METERS_FAIL,
  GET_METERS_SUCCESS,
  GET_METER_DETAIL,
  GET_METER_DETAIL_FAIL,
  GET_METER_DETAIL_SUCCESS,
  UPDATE_METER,
  UPDATE_METER_FAIL,
  UPDATE_METER_SUCCESS,
  GET_META,
  POST_METER_REPORT,
  POST_METER_REPORT_SUCCESS,
  POST_METER_REPORT_FAIL,
  GET_METER_REPORT,
  GET_METER_REPORT_SUCCESS,
  GET_METER_REPORT_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  meters: [],
  meterDetail: {},
  error: null,
  loading: false,
  loadingDetail: false,
  successPost: false,
  successGet: false,
  successUpdate: false,
  successReport: false,
  meta: {},
  savedMetas: [],
  meterReports: [],
};

const MetersRegistration = (state = INIT_STATE, action) => {
  switch (action.type) {
    //CREATE METER TO WAREHOUSE
    case CREATE_METER:
      return {
        ...state,
        loading: true,
        error: null,
        successGet: false,
        successPost: false,
        successUpdate: false,
        successReport: false,
      };
    case CREATE_METER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    //REGISTER METER
    case REGISTER_METER:
      return {
        ...state,
        loading: true,
        error: null,
        successGet: false,
        successPost: false,
        successUpdate: false,
        successReport: false,
      };
    case REGISTER_METER_SUCCESS:
      return {
        ...state,
        meters: [...state.meters],
        loading: false,
        successPost: true,
      };
    case REGISTER_METER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        successPost: false,
      };
    //GET METERS
    case GET_METERS:
      return {
        ...state,
        loading: true,
        error: null,
        successGet: false,
        successPost: false,
        successUpdate: false,
        successReport: false,
      };
    case GET_METERS_SUCCESS:
      return {
        ...state,
        meters: action.payload,
        loading: false,
        successGet: true,
      };
    case GET_METERS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    //GET METER DETAIL
    case GET_METER_DETAIL:
      return {
        ...state,
        loadingDetail: true,
        error: null,
      };
    case GET_METER_DETAIL_SUCCESS:
      return {
        ...state,
        meterDetail: action.payload,
        loadingDetail: false,
      };
    case GET_METER_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingDetail: false,
      };
    //UPDATE METER
    case UPDATE_METER:
      return {
        ...state,
        loading: true,
        error: null,
        successGet: false,
        successPost: false,
        successUpdate: false,
        successReport: false,
      };
    case UPDATE_METER_SUCCESS:
      return {
        ...state,
        meters: [...state.meters],
        loading: false,
        successUpdate: true,
      };
    case UPDATE_METER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        successUpdate: false,
      };
    case GET_META:
      return {
        ...state,
        savedMetas: [...state.savedMetas, action.payload],
        meta: action.payload,
        loading: false,
        error: null,
        successGet: false,
        successPost: false,
        successUpdate: false,
        successReport: false,
      };
    //METER TEST REPORT
    case POST_METER_REPORT:
      return {
        ...state,
        meta: action.payload,
        loading: true,
        error: null,
        successGet: false,
        successPost: false,
        successUpdate: false,
        successReport: false,
      };
    case POST_METER_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        successReport: true,
      };
    case POST_METER_REPORT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        successReport: false,
      };
    case GET_METER_REPORT:
      return {
        ...state,
        loadingDetail: true,
        error: null,
        successGet: false,
        successPost: false,
        successUpdate: false,
        successReport: false,
      };
    case GET_METER_REPORT_SUCCESS:
      return {
        ...state,
        meterReports: action.payload,
        loadingDetail: false,
        successGet: true,
      };
    case GET_METER_REPORT_FAIL:
      return {
        ...state,
        error: action.payload,
        loadingDetail: false,
      };

    default:
      return state;
  }
};

export default MetersRegistration;
