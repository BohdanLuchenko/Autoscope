import { GET_TSR_LIST_FAIL, GET_TSR_LIST_SUCCESS } from "store/TSR/actionTypes";

const INIT_STATE = {
  TSRList: [],
  error: {},
};

const TSR = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TSR_LIST_SUCCESS:
      return {
        ...state,
        TSRList: action.payload.items,
      };

    case GET_TSR_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default TSR;
