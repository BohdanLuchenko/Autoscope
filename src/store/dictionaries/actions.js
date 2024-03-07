import { GET_DICTIONARY_SUCCESS, GET_DICTIONARY_FAIL, GET_DICTIONARY } from "./actionTypes";

export const getDictionary = name => ({
  type: GET_DICTIONARY,
  payload: name,
});

export const getDictionarySuccess = (name, list) => ({
  type: GET_DICTIONARY_SUCCESS,
  payload: { type: name, data: list },
});

export const getDictionaryFail = (name, error) => ({
  type: GET_DICTIONARY_FAIL,
  payload: { type: name, error },
});
