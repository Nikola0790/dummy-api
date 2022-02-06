import {POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAIL} from "./types";
import { getAllPosts } from "../../services/services";

export const actionsPosts = (num) => async (dispatch) => {
    dispatch({type: POSTS_REQUEST});
    try {
        const data = await getAllPosts(num);
        dispatch({type: POSTS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: POSTS_FAIL, payload: error.message});
    }
};