import {
  GET_TOP_REGIONS_STATS,
  GET_TOP_REGIONS_STATS_FAIL,
  GET_TOP_REGIONS_STATS_SUCCESS,

  GET_APPROVAL_STATS,
  GET_APPROVAL_STATS_FAIL,
  GET_APPROVAL_STATS_SUCCESS,

  GET_DAILY_STATS,
  GET_DAILY_STATS_FAIL,
  GET_DAILY_STATS_SUCCESS,

  GET_REG_BY_STATUS_STATS,
  GET_REG_BY_STATUS_STATS_FAIL,
  GET_REG_BY_STATUS_STATS_SUCCESS, GET_LEAD_TRENDS, GET_LEAD_TRENDS_SUCCESS, GET_LEAD_TRENDS_FAIL
} from "./actionTypes"

export const getTopDepotsStats = () => ({
  type: GET_TOP_REGIONS_STATS
})

export const getTopDepotsSuccess = topRegions => ({
  type: GET_TOP_REGIONS_STATS_SUCCESS,
  payload: topRegions,
})

export const getTopDepotsFail = error => ({
  type: GET_TOP_REGIONS_STATS_FAIL,
  payload: error,
})

export const getRegByStatusStats = () => ({
  type: GET_REG_BY_STATUS_STATS,
})

export const getRegByStatusStatsSuccess = stats => ({
  type: GET_REG_BY_STATUS_STATS_SUCCESS,
  payload: stats,
})

export const getRegByStatusStatsFail = error => ({
  type: GET_REG_BY_STATUS_STATS_FAIL,
  payload: error,
})

export const getDailyStats = () => ({
  type: GET_DAILY_STATS,
})

export const getDailyStatsSuccess = stats => ({
  type: GET_DAILY_STATS_SUCCESS,
  payload: stats,
})

export const getDailyStatsFail = error => ({
  type: GET_DAILY_STATS_FAIL,
  payload: error,
})


export const getApprovalStats = () => ({
  type: GET_APPROVAL_STATS,
})

export const getApprovalStatsSuccess = stats => ({
  type: GET_APPROVAL_STATS_SUCCESS,
  payload: stats,
})

export const getApprovalStatsFail = error => ({
  type: GET_APPROVAL_STATS_FAIL,
  payload: error,
})


export const getAssetTrends = () => ({
  type: GET_LEAD_TRENDS,
})

export const getAssetTrendsSuccess = stats => ({
  type: GET_LEAD_TRENDS_SUCCESS,
  payload: stats,
})

export const getAssetTrendsFail = error => ({
  type: GET_LEAD_TRENDS_FAIL,
  payload: error,
})
