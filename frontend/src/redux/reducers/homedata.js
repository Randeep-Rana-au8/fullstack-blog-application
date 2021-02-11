import { TOGGLE_HOME_FETCHING_STATE, GET_HOME_DATA } from "../actionTypes";

const initialState = {
  posts: [],
  isDataFetching: false,
};

const newsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HOME_DATA:
      return { ...state, posts: payload };
    case TOGGLE_HOME_FETCHING_STATE:
      return { ...state, isDataFetching: !state.isDataFetching };
    default:
      return state;
  }
};

export default newsReducer;