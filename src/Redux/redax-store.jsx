import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import PostsReduser from "./post-reduser";
import postProfileReducer from "./postProfile-reduser";

let reducers = combineReducers({
  postsPage: PostsReduser,
  postPage: postProfileReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;
