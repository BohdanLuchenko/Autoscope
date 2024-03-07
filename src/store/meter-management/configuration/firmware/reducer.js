import {
  GET_FIRMWARES,
  GET_FIRMWARES_FAIL,
  GET_FIRMWARES_SUCCESS,
  CREATE_FIRMWARE,
  CREATE_FIRMWARE_SUCCESS,
  CREATE_FIRMWARE_FAIL,
  UPDATE_FIRMWARE,
  UPDATE_FIRMWARE_FAIL,
  UPDATE_FIRMWARE_SUCCESS,
  DELETE_FIRMWARE,
  DELETE_FIRMWARE_FAIL,
  DELETE_FIRMWARE_SUCCESS,
} from "./actionTypes";

const INIT_STATE = {
  firmwares: [],
  firmwaresLoading: false,
  error: null,
  successCreateFlag: false,
  successUpdateFlag: false,
  successDeleteFlag: false,
  successGetFlag: false,
};

const Firmwares = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_FIRMWARES:
      return {
        ...state,
        firmwaresLoading: true,
      };
    case GET_FIRMWARES_SUCCESS:
      return {
        ...state,
        firmwares: action.payload,
        firmwaresLoading: false,
        error: null,
        successGetFlag: true,
      };
    case DELETE_FIRMWARE_FAIL:
    case UPDATE_FIRMWARE_FAIL:
    case GET_FIRMWARES_FAIL:
    case CREATE_FIRMWARE_FAIL:
      return {
        ...state,
        firmwaresLoading: false,
        error: action.payload,
        successGetFlag: false,
        successCreateFlag: false,
        successUpdateFlag: false,
        successDeleteFlag: false,
      };
    case DELETE_FIRMWARE:
    case UPDATE_FIRMWARE:
    case CREATE_FIRMWARE:
      return {
        ...state,
        firmwaresLoading: true,
      };
    case CREATE_FIRMWARE_SUCCESS:
      return {
        ...state,
        firmwares: [...state.firmwares],
        firmwaresLoading: false,
        error: null,
        successGetFlag: false,
        successCreateFlag: true,
        successUpdateFlag: false,
        successDeleteFlag: false,
      };
    case UPDATE_FIRMWARE_SUCCESS:
      return {
        ...state,
        firmwares: [...state.firmwares],
        firmwaresLoading: false,
        error: null,
        successGetFlag: false,
        successCreateFlag: false,
        successUpdateFlag: true,
        successDeleteFlag: false,
      };
    case DELETE_FIRMWARE_SUCCESS:
      return {
        ...state,
        firmwares: [...state.firmwares],
        firmwaresLoading: false,
        error: null,
        successGetFlag: false,
        successCreateFlag: false,
        successUpdateFlag: false,
        successDeleteFlag: true,
      };
    default:
      return state;
  }
};

export default Firmwares;
