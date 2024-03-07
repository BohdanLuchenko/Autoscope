// @flow
import { CLEAR_BREADCRUMBS, SET_BREADCRUMBS } from "store/utils/actionTypes";

const INIT_STATE = {
  breadcrumbs: [],
  failedActions: [],
};

const Utils = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CLEAR_BREADCRUMBS:
      return {
        ...state,
        breadcrumbs: [],
      };

    case SET_BREADCRUMBS:
      return {
        ...state,
        breadcrumbs: action.payload,
      };

    default:
      return state;
  }
};

export default Utils;
