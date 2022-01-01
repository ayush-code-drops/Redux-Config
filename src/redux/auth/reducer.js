import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_SUCCESS } from "./actionTypes";

const token = loadData("token") || null;

const initState = {
  isAuth: !!token,
  token: token
};
export function authReducer(state = initState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      saveData("token", payload.token);
      const todos = loadData("todos");
      return {
        ...state,
        todos: todos,
        isAuth: true,
        token: payload.token
      };
    default:
      return state;
  }
}
