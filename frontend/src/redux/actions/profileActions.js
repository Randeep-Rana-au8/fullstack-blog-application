import { SET_PROFILE, TOGGLE_PROFILE_STATE, SET_MYPOSTS } from "../actionTypes";

export const setProfile = (profile) => {
    return {
      type: SET_PROFILE,
      payload: profile,
    };
  };
  
  export const toggleProdileState = () => {
    return {
      type: TOGGLE_PROFILE_STATE,
    };
  };
  
  export const setmyposts = (myPosts) => {
    return {
      type: SET_MYPOSTS,
      payload: myPosts,
    };
  };