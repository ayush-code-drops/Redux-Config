import { loadData, saveData } from "../../utils/localStorage";
import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  TO_DO_FAILURE,
  TO_DO_REQUEST,
  TO_DO_SUCCESS
} from "./actionTypes";

const data = loadData("todos") || [];

const initState = {
  todos: data,
  isLoading: true,
  isError: false
};
export function appReducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_TASK:
      console.log("st", data);
      const updatedTodos = [...state.todos, payload];
      saveData("todos", updatedTodos);
      return {
        ...state,
        todos: updatedTodos
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos?.filter((item) => item.id !== payload.id)
      };
    case TOGGLE_TASK:
      return {
        ...state,
        todos: state.todos?.map((item) => {
          return item.id === payload.id
            ? { ...item, status: !item.status }
            : item;
        })
      };
    case TO_DO_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case TO_DO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos],
        isLoading: false
      };
    case TO_DO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
}
