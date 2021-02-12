import { SET_PROFILE, TOGGLE_PROFILE_STATE, SET_MYPOSTS } from "../actionTypes";

const initialState = {
  profile: "",
  myPosts: ""
};

const usersProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profile: action.payload };
    case TOGGLE_PROFILE_STATE:
      return { ...state, isprofileenticating: !state.isprofileenticating };
    case SET_MYPOSTS:
      return { ...state, myPosts: null };
    default:
      return state;
  }
};

export default usersProfileReducer;
