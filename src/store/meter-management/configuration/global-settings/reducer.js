import {
  CREATE_SETTINGS,
  CREATE_SETTINGS_SUCCESS,
  CREATE_SETTINGS_FAIL,
  READ_SETTINGS,
  READ_SETTINGS_SUCCESS,
  READ_SETTINGS_FAIL,
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_FAIL,
  DELETE_SETTINGS,
  DELETE_SETTINGS_SUCCESS,
  DELETE_SETTINGS_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  settings: [],
  loading: false,
  error: null,
  onSuccessGet: false,
  onSuccessUpdate: false,
};

const GlobalSettings = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_SETTINGS:
      return {
        ...state,
        loading: true,
      };

    case CREATE_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: [...state.settings],
        loading: false,
      }
    case CREATE_SETTINGS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    //READ
    case READ_SETTINGS:
      return {
        ...state,
        loading: true,
        onSuccessGet: false,
        onSuccessUpdate: false,
        error: null
      };
    case READ_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: action.payload,
        loading: false,
        onSuccessGet: true,
      };
    case READ_SETTINGS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    //UPDATE
    case UPDATE_SETTINGS:
      return {
        ...state,
        loading: true,
        onSuccessGet: false,
        onSuccessUpdate: false,
      };

    case UPDATE_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: [...state.settings],
        loading: false,
        onSuccessUpdate: true
      }
    case UPDATE_SETTINGS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    //DELETE
    case DELETE_SETTINGS:
      return {
        ...state,
        loading: true,
      };

    case DELETE_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: [...state.settings],
        loading: false,
      }
    case DELETE_SETTINGS_FAIL:
      return {
        ...state,
        error: [...state.settings],
        loading: false,
      }
    default:
      return state;
  }
};

export default GlobalSettings;
