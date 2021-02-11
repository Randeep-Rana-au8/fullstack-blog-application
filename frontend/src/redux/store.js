import { combineReducers, createStore } from "redux";
import blogsReducer from "./reducers/blogReducer";
import usersReducer from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import homedatareducer from "./reducers/homedata";

const store = createStore(
  combineReducers({ usersReducer, blogsReducer, homedatareducer }),
  composeWithDevTools()
);

export default store;
