import { POSTS_SUCCESS, POSTS_REQUEST, POSTS_FAIL } from "./types";

const initialState = {
    loading: false,
    data: [],
};

const reducerPosts = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POSTS_SUCCESS: 
            return {
                loading: false,
                data: action.payload,
            };
        case POSTS_FAIL:
            return {
                loading: false,
                data: action.payload,
            }
        default:
            return state;
    }
}

export default reducerPosts;