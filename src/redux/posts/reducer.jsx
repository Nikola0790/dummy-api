import { POSTS_SUCCESS, POSTS_REQUEST, POSTS_FAIL } from "./types";

const initialState = {
  loading: true,
  data: [],
  error: "",
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
        error: "",
      };
    case POSTS_FAIL:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducerPosts;
