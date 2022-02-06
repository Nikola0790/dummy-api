import { combineReducers } from "redux";
import reducerPosts from "./posts/reducer";
import reducerSinglePostDetails from "./singlePost/reducer";

const rootReducer = combineReducers({
    posts: reducerPosts,
    singlePost: reducerSinglePostDetails,
})

export default rootReducer;