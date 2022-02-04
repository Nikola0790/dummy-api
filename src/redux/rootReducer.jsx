import { combineReducers } from "redux";
import reducerPosts from "./posts/reducer";

const rootReducer = combineReducers({
    posts: reducerPosts
})

export default rootReducer;