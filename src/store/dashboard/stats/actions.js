import {
  GET_STATS, GET_STATS_FAIL,
  GET_STATS_SUCCESS
} from "./actionTypes"

export const getStats = () => ({
  type: GET_STATS,
})

export const getStatsSuccess = stats => ({
  type: GET_STATS_SUCCESS,
  payload: stats,
})

export const getStatsFail = error => ({
  type: GET_STATS_FAIL,
  payload: error,
})
