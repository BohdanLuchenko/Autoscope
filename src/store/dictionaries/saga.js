import { call, put, takeEvery } from "redux-saga/effects";
import { retrieveDictionaries } from "utils/api";
import { GET_DICTIONARY } from "store/dictionaries/actionTypes";
import { getDictionaryFail, getDictionarySuccess } from "store/dictionaries/actions";

function* fetchDictionary({ payload }) {
  try {
    if (payload) {
      const response = yield call(retrieveDictionaries, payload);
      yield put(getDictionarySuccess(payload, response.data.result));
    }
  } catch (error) {
    yield put(getDictionaryFail(payload, error));
  }
}

function* DictionariesSaga() {
  yield takeEvery(GET_DICTIONARY, fetchDictionary);
}

export default DictionariesSaga;
