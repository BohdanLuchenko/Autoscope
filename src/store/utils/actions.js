import { CLEAR_BREADCRUMBS, SET_BREADCRUMBS } from "./actionTypes";

export const clearBreadcrumbs = () => ({
  type: CLEAR_BREADCRUMBS,
});

export const setBreadcrumbs = list => ({
  type: SET_BREADCRUMBS,
  payload: list,
});
