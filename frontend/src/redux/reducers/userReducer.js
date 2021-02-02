import { SET_USER, TOGGLE_AUTH_STATE, LOGOUT_USER, DESTROY_SESSION } from "../actionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticating: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const userJSON = JSON.stringify(action.payload);
      localStorage.setItem("user", userJSON);
      return { ...state, user: action.payload };
      case TOGGLE_AUTH_STATE:
        return { ...state, isAuthenticating: !state.isAuthenticating };
      case LOGOUT_USER:
        localStorage.removeItem("user");
        return { ...state, user: null };
    default:
      return {
        ...state,
      };
  }
};

export default usersReducer;
