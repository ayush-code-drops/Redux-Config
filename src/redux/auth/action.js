import { LOGIN_SUCCESS } from "./actionTypes";

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: token
    }
  };
}
