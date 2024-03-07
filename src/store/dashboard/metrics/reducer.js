import {
  GET_TOP_REGIONS_STATS_SUCCESS,
  GET_TOP_REGIONS_STATS_FAIL,
  GET_APPROVAL_STATS_FAIL,
  GET_APPROVAL_STATS_SUCCESS,
  GET_DAILY_STATS_FAIL,
  GET_DAILY_STATS_SUCCESS,
  GET_REG_BY_STATUS_STATS_FAIL,
  GET_REG_BY_STATUS_STATS_SUCCESS,
  GET_LEAD_TRENDS_SUCCESS,
  GET_LEAD_TRENDS_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  topDepots: [],
  topDepot: {},
  stats: [],
  daily: {},
  trending: {},
  approval: {},
  error: {},
};

const metrics = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TOP_REGIONS_STATS_SUCCESS:
      return {
        ...state,
        topDepots: action.payload,
      };

    case GET_LEAD_TRENDS_SUCCESS:
      return {
        ...state,
        trending: action.payload,
      };

    case GET_TOP_REGIONS_STATS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_REG_BY_STATUS_STATS_SUCCESS:
      return {
        ...state,
        stats: action.payload,
      };
    case GET_DAILY_STATS_SUCCESS:
      return {
        ...state,
        daily: action.payload,
      };
    case GET_APPROVAL_STATS_SUCCESS:
      return {
        ...state,
        approval: action.payload,
      };

    case GET_REG_BY_STATUS_STATS_FAIL:
    case GET_APPROVAL_STATS_FAIL:
    case GET_DAILY_STATS_FAIL:
    case GET_LEAD_TRENDS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default metrics;
