import {
  ASSIGN_TASKS_FAIL,
  ASSIGN_TASKS_SUCCESS,
  ASSIGN_TASKS,
} from "./actionTypes"

export const assignBulkTasks = () => ({
  type: ASSIGN_TASKS,
  payload: data
})

export const assignTasksSuccess = tasks => ({
  type: ASSIGN_TASKS_SUCCESS,
  payload: tasks,
})

export const assignTasksFailed = error => ({
  type: ASSIGN_TASKS_FAIL,
  payload: error,
})



