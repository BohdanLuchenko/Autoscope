import { GET_DICTIONARY_FAIL, GET_DICTIONARY_SUCCESS } from "store/dictionaries/actionTypes";

const INIT_STATE = {
  list: {},
  error: {},
};

const Dictionaries = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_DICTIONARY_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.type]: data.items,
        },
      };

    case GET_DICTIONARY_FAIL:
      const { error } = action.payload;
      return {
        ...state,
        error: {
          [action.payload.type]: error,
        },
      };

    default:
      return state;
  }
};

export default Dictionaries;
