import {
  SEND_METER,
  SEND_METER_SUCCESS,
  SEND_METER_FAIL,
  RESET_COMMAND_SUCCESS_GET,
  SET_ACTIVE_METER_SPARE_PART,
} from "./actionTypes";
const INIT_STATE = {
  command: [],
  meta: {},
  loading: false,
  commandSuccessGet: false,
  commandError: null,
  maintenanceReport: {},
};

const MeterCommands = (state = INIT_STATE, action) => {
  switch (action.type) {
    //GET CSRP
    case SEND_METER:
      return {
        ...state,
        loading: true,
        commandSuccessGet: false,
        commandError: null,
      };
    case SEND_METER_SUCCESS:
      return {
        ...state,
        loading: false,
        command: action.payload,
        commandSuccessGet: true,
      };
    case SEND_METER_FAIL:
      return {
        ...state,
        loading: false,
        commandError: action.payload,
      };
    case RESET_COMMAND_SUCCESS_GET:
      return {
        ...state,
        commandSuccessGet: false,
      };
    case SET_ACTIVE_METER_SPARE_PART:
      return {
        ...state,
        activeSparePart: action.payload,
      };
    default:
      return state;
  }
};

export default MeterCommands;
