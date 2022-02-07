import {
  UPADATE_POST_REQUEST,
  UPADATE_POST_SUCCESS,
  UPADATE_POST_FAIL,
} from "./types";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const reducerEditPost = (state = initialState, action) => {
  switch (action.type) {
    case UPADATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPADATE_POST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case UPADATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducerEditPost;
