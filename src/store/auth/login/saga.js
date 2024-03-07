import { call, put, takeEvery } from "redux-saga/effects";
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { apiError, loginSuccess } from "./actions";
import jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";
import jwtDecode from "jwt-decode";
import config from "../../../appconfig";
import { createDepot } from "../depotLogin/actions";

const retrieveUser = async ({ id_token, access_token, refresh_token }) => {
  let decoded;
  const decodedHeader = jwtDecode(id_token, { header: true });
  const url = `https://cognito-idp.${config.cognito.region}.amazonaws.com/${config.cognito.userPoolId}/.well-known/jwks.json`;
  const response = await fetch(url);
  const jwkKeys = await response.json();
  const jwks = jwkKeys.keys.filter(f => f.kid === decodedHeader.kid);
  if (jwks.length === 0) return "Could not verify your credentials";
  const jwk = jwks[0];
  const pem = jwkToPem(jwk);
  try {
    decoded = jwt.verify(id_token, pem, { algorithms: [decodedHeader.alg] });
    if (!decoded) return "Could not verify your credentials";
  } catch (err) {
    return JSON.stringify(err);
  }

  return {
    id: decoded.userId,
    email: decoded.email,
    firstName: decoded.given_name,
    lastName: decoded.family_name,
    roles: decoded.roles,
    token: id_token,
    accessToken: access_token,
    refresh_token: refresh_token,
    depotName: decoded.depot,
    groups: decoded.groups,
    expiration: decoded.exp * 1000,
  };
};

function* login({ payload }) {
  const { user } = payload;
  const decodedPayload = JSON.parse(atob(user));
  if (decodedPayload.error) {
    yield put(apiError(decodedPayload.error));
  }
  try {
    const response = yield call(retrieveUser, decodedPayload.token);
    if (typeof response === "string") {
      yield put(apiError(response));
      return;
    }

    // localStorage.setItem("expiration", response.expiration);
    // localStorage.setItem("b2c:authUser", JSON.stringify(response));
    //localStorage.setItem("b2c:authToken", JSON.stringify(response.token));
    yield put(loginSuccess(response));
    yield put(createDepot(response?.depotName));
    window.open("/", "_self");
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      default:
        message = error;
    }
    yield put(apiError(message));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.clear();
    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, login);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
