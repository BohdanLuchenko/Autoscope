import { takeEvery, fork, all } from "redux-saga/effects";
import { EDIT_PROFILE } from "./actionTypes";

function* editProfile({ payload: { user } }) {}
export function* watchProfile() {
  yield takeEvery(EDIT_PROFILE, editProfile);
}

function* ProfileSaga() {
  yield all([fork(watchProfile)]);
}

export default ProfileSaga;
