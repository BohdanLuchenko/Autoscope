// @flow
import { GET_PACKAGES_FAIL, GET_PACKAGES_SUCCESS } from "store/packages/actionTypes";

const INIT_STATE = {
  list: [],
  error: {},
};

const Packages = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PACKAGES_SUCCESS:
      return {
        ...state,
        list: action.payload.items,
      };

    case GET_PACKAGES_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default Packages;
