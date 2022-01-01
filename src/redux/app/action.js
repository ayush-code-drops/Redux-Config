import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  TO_DO_FAILURE,
  TO_DO_REQUEST,
  TO_DO_SUCCESS
} from "./actionTypes";

export function addTask(payload) {
  return {
    type: ADD_TASK,
    payload
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {
      id: id
    }
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    payload: {
      id: id
    }
  };
}

export function todoRequest() {
  return {
    type: TO_DO_REQUEST
  };
}
export function todoSuccess(todos) {
  return {
    type: TO_DO_SUCCESS,
    payload: {
      todos: todos
    }
  };
}
export function todoFailure() {
  return {
    type: TO_DO_FAILURE
  };
}
