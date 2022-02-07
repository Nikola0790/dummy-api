import { combineReducers } from "redux";
import reducerPosts from "./posts/reducer";
import reducerSinglePostDetails from "./singlePost/reducer";
import reducerEditPost from "./editPost/reducer";

const rootReducer = combineReducers({
  posts: reducerPosts,
  singlePost: reducerSinglePostDetails,
  editedPost: reducerEditPost,
});

export default rootReducer;
