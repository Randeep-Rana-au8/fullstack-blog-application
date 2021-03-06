import { SET_USER, TOGGLE_AUTH_STATE, LOGOUT_USER, DESTROY_SESSION } from "../actionTypes";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const toggleIsAuthenticating = () => {
  return {
    type: TOGGLE_AUTH_STATE,
  };
};

export const logOutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};