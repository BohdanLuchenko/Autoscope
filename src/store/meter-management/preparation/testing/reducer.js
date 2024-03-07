import {
  ASSIGN_METERS_FAIL,
  ASSIGN_METERS_SUCCESS,
  ASSIGN_METERS,
} from "./actionTypes"

const INIT_STATE = {
  meters: [],
  meter: {},
  error: {},
  loading: false
}

const Meters = (state = INIT_STATE, action) => {

  switch (action.type) {
    case ASSIGN_METERS:
      return {
        ...state,
        loading: true
      }
    case ASSIGN_METERS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case ASSIGN_METERS_SUCCESS:
      return {
        ...state,
        meters: action.payload,
        loading: false
      }

    default:
      return state
  }
}

export default Meters;
