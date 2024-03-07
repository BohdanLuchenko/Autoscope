import {
  ASSIGN_TASKS_FAIL,
  ASSIGN_TASKS_SUCCESS,
  GET_TASK_CATEGORY,
  GET_TASK_CATEGORY_SUCCESS,
  GET_TASK_CATEGORY_FAIL,
  GET_TASK_STATUS,
  GET_TASK_STATUS_SUCCESS,
  GET_TASK_STATUS_FAIL,
  CANCEL_TASK,
  CANCEL_TASK_FAIL,
  CANCEL_TASK_SUCCESS,
  CLEAR_ERRORS,
} from "./actionTypes";

export const assignTasksSuccess = tasks => ({
  type: ASSIGN_TASKS_SUCCESS,
  payload: tasks,
});

export const assignTasksFailed = error => ({
  type: ASSIGN_TASKS_FAIL,
  payload: error,
});

export const getTaskCategory = () => ({
  type: GET_TASK_CATEGORY,
});

export const getTaskCategorySuccess = category => ({
  type: GET_TASK_CATEGORY_SUCCESS,
  payload: category,
});

export const getTaskCategoryFailed = error => ({
  type: GET_TASK_CATEGORY_FAIL,
  payload: error,
});

export const getTaskStatus = () => ({
  type: GET_TASK_STATUS,
});

export const getTaskStatusSuccess = status => ({
  type: GET_TASK_STATUS_SUCCESS,
  payload: status,
});

export const getTaskStatusFailed = error => ({
  type: GET_TASK_STATUS_FAIL,
  payload: error,
});

export const cancelTask = data => ({
  type: CANCEL_TASK,
  payload: data,
});

export const cancelTaskSuccess = tasks => ({
  type: CANCEL_TASK_SUCCESS,
  payload: tasks,
});

export const cancelTaskFailed = error => ({
  type: CANCEL_TASK_FAIL,
  payload: error,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
