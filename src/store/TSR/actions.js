import { GET_TSR_LIST, GET_TSR_LIST_SUCCESS, GET_TSR_LIST_FAIL } from "./actionTypes";

export const getTSRList = () => ({
  type: GET_TSR_LIST,
});

export const getTSRListSuccess = TSRList => ({
  type: GET_TSR_LIST_SUCCESS,
  payload: TSRList,
});

export const getTSRListFail = error => ({
  type: GET_TSR_LIST_FAIL,
  payload: error,
});
