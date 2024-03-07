import { GET_PACKAGES_SUCCESS, GET_PACKAGES_FAIL, GET_PACKAGES } from "./actionTypes";

export const getPackages = () => ({
  type: GET_PACKAGES,
});

export const getPackagesSuccess = list => ({
  type: GET_PACKAGES_SUCCESS,
  payload: list,
});

export const getPackagesFail = error => ({
  type: GET_PACKAGES_FAIL,
  payload: error,
});
