import { combineReducers, createStore } from "redux";
import blogsReducer from "./redux/reducers/reducer";
import usersReducer from "./redux/reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers(
    { users: usersReducer, blogs: blogsReducer },
    composeWithDevTools()
  )
);

export default store;
