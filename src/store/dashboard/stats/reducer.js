import {
  GET_STATS_SUCCESS,
  GET_STATS_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  stats: {},
  error: {},
}

const stats = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_STATS_SUCCESS:
      return {
        ...state,
        stats: action.payload,
      }

    case GET_STATS_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default stats
