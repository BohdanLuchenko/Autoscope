import {
  ASSIGN_TASKS_FAIL,
  ASSIGN_TASKS_SUCCESS,
  ASSIGN_TASKS,
  GET_TASK_CATEGORY,
  GET_TASK_CATEGORY_SUCCESS,
  GET_TASK_CATEGORY_FAIL,
  GET_TASK_STATUS,
  GET_TASK_STATUS_FAIL,
  GET_TASK_STATUS_SUCCESS,
  CANCEL_TASK,
  CANCEL_TASK_SUCCESS,
  CANCEL_TASK_FAIL,
  CLEAR_ERRORS,
} from "./actionTypes";

const INIT_STATE = {
  tasks: [],
  task: {},
  cancelledTask: {},
  taskCategory: [],
  taskStatus: [],
  error: {},
  loading: false,
  cancelTaskPostSuccess: false,
  cancelTaskPostFail: false,
  errorCancelTask: {},
};

const Tasks = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ASSIGN_TASKS:
      return {
        ...state,
        loading: true,
      };
    case ASSIGN_TASKS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ASSIGN_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case GET_TASK_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case GET_TASK_CATEGORY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_TASK_CATEGORY_SUCCESS:
      return {
        ...state,
        taskCategory: action.payload,
        loading: false,
      };
    case GET_TASK_STATUS:
      return {
        ...state,
        loading: true,
      };
    case GET_TASK_STATUS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_TASK_STATUS_SUCCESS:
      return {
        ...state,
        taskStatus: action.payload,
        loading: false,
      };

    case CANCEL_TASK:
      return {
        ...state,
        loading: true,
        cancelTaskPostSuccess: false,
        cancelTaskPostFail: false,
      };
    case CANCEL_TASK_FAIL:
      // eslint-disable-next-line no-console
      console.log("ACTION::", action);
      return {
        ...state,
        errorCancelTask: action.payload,
        loading: false,
        cancelTaskPostFail: true,
        cancelTaskPostSuccess: false,
      };

    case CANCEL_TASK_SUCCESS:
      return {
        ...state,
        cancelledTask: action.payload,
        loading: false,
        cancelTaskPostFail: false,
        cancelTaskPostSuccess: true,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        cancelTaskPostSuccess: false,
        cancelTaskPostFail: false,
        errorCancelTask: {},
        cancelledTask: {},
      };

    default:
      return state;
  }
};

export default Tasks;
