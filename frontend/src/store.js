import { combineReducers, createStore } from "redux";
import blogsReducer from "./redux/reducers/blogReducer";
import usersReducer from "./redux/reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({ usersReducer, blogsReducer }),
  composeWithDevTools()
);

export default store;
