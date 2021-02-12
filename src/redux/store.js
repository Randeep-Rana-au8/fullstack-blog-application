import { combineReducers, createStore } from "redux";
import blogsReducer from "./reducers/blogReducer";
import usersReducer from "./reducers/userReducer";
import profileReducer from "./reducers/userProfileReducer"
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({ usersReducer, blogsReducer , profileReducer}),
  composeWithDevTools()
);

export default store;
