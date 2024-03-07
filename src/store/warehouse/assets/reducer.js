import {
  GET_ASSETS_FAIL,
  GET_ASSETS_SUCCESS,
  GET_ASSETS,
  CREATE_BULK_CARDS,
  CREATE_BULK_CARDS_SUCCESS,
  CREATE_BULK_CARDS_FAIL
} from "./actionTypes"

const INIT_STATE = {
  assets: [],
  cards:[],
  asset: {},
  error: {},
  loading: false
}

const Assets = (state = INIT_STATE, action) => {

  switch (action.type) {
    case GET_ASSETS:
      return {
        ...state,
        loading: true
      }
    case GET_ASSETS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case GET_ASSETS_SUCCESS:
      return {
        ...state,
        assets: action.payload,
        loading: false
      }
      case CREATE_BULK_CARDS:
        return {
          ...state,
          loading: true
        }

      case CREATE_BULK_CARDS_SUCCESS:
        return {
          ...state,
          cards: action.payload,
          loading: false
        }
      case CREATE_BULK_CARDS_FAIL:
        return {
          ...state,
          error: action.payload,
          loading: false
        }

    default:
      return state
  }
}

export default Assets;
