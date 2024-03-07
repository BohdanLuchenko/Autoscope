import {
  CREATE_ACCESSORY,
  CREATE_ACCESSORY_SUCCESS,
  CREATE_ACCESSORY_FAIL,
  READ_ACCESSORY,
  READ_ACCESSORY_SUCCESS,
  READ_ACCESSORY_FAIL,
  UPDATE_ACCESSORY,
  UPDATE_ACCESSORY_SUCCESS,
  UPDATE_ACCESSORY_FAIL,
  DELETE_ACCESSORY,
  DELETE_ACCESSORY_SUCCESS,
  DELETE_ACCESSORY_FAIL,
  GET_SENSORS,
  GET_SENSORS_SUCCESS,
  GET_SENSORS_FAIL,
  GET_MICROCONTROLLERS,
  GET_MICROCONTROLLERS_SUCCESS,
  GET_MICROCONTROLLERS_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  accessories: [],
  sensors: [],
  microcontrollers: [],
  loading: false,
  error: {},
  sensorsSuccess: false,
  microcontrollerSuccess: false,
  accessorySuccessGet: false,
  accessorySuccessPost: false,
  accessorySuccessUpdate: false,
  accessorySuccessDelete: false,
  accessoryError: null
};

const Accessories = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_ACCESSORY:
      return {
        ...state,
        loading: true,
        accessorySuccessGet: false,
        accessorySuccessPost: false,
        accessorySuccessUpdate: false,
        accessorySuccessDelete: false,
        accessoryError: null
      };

    case CREATE_ACCESSORY_SUCCESS:
      return {
        ...state,
        accessories: [...state.accessories],
        loading: false,
        accessorySuccessPost: true
      }
    case CREATE_ACCESSORY_FAIL:
      return {
        ...state,
        accessoryError: action.payload,
        loading: false,
      };
    //READ
    case READ_ACCESSORY:
      return {
        ...state,
        loading: true,
        accessorySuccessGet: false,
        accessorySuccessPost: false,
        accessorySuccessUpdate: false,
        accessorySuccessDelete: false,
        accessoryError: null
      };
    case READ_ACCESSORY_SUCCESS:
      return {
        ...state,
        accessories: action.payload,
        accessorySuccessGet: true,
        loading: false,
      };
    case READ_ACCESSORY_FAIL:
      return {
        ...state,
        accessoryError: action.payload,
        loading: false,
      };

    case GET_SENSORS:
      return {
        ...state,
        loading: true,

      };
    case GET_SENSORS_SUCCESS:
      return {
        ...state,
        sensors: action.payload,
        sensorsSuccess: true,
        loading: false,
      };
    case GET_SENSORS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_MICROCONTROLLERS:
      return {
        ...state,
        loading: true,
      };

    case GET_MICROCONTROLLERS_SUCCESS:
      return {
        ...state,
        microcontrollerSuccess: true,
        microcontrollers: action.payload,
        loading: false,
      };
    case GET_MICROCONTROLLERS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    //UPDATE
    case UPDATE_ACCESSORY:
      return {
        ...state,
        loading: true,
        accessorySuccessGet: false,
        accessorySuccessPost: false,
        accessorySuccessUpdate: false,
        accessorySuccessDelete: false,
        accessoryError: null
      };

    case UPDATE_ACCESSORY_SUCCESS:
      return {
        ...state,
        accessories: [...state.accessories],
        accessorySuccessUpdate: true,
        loading: false,
      }
    case UPDATE_ACCESSORY_FAIL:
      return {
        ...state,
        accessoryError: action.payload,
        loading: false,
      };
    //DELETE
    case DELETE_ACCESSORY:
      return {
        ...state,
        loading: true,
        accessorySuccessGet: false,
        accessorySuccessPost: false,
        accessorySuccessUpdate: false,
        accessorySuccessDelete: false,
        accessoryError: null
      };

    case DELETE_ACCESSORY_SUCCESS:
      return {
        ...state,
        accessories: [...state.accessories],
        accessorySuccessDelete: true,
        loading: false,
      }
    case DELETE_ACCESSORY_FAIL:
      return {
        ...state,
        accessoryError: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default Accessories;
