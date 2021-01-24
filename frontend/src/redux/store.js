import { combineReducers, createStore } from "redux";
import blogsReducer from "./reducers/blogReducer";
import usersReducer from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({ usersReducer, blogsReducer }),
  composeWithDevTools()
);

export default store;
