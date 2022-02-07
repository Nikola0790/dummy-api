import { updatePost } from "../../services/services";
import {
  UPADATE_POST_REQUEST,
  UPADATE_POST_SUCCESS,
  UPADATE_POST_FAIL,
} from "./types";

export const actionsEditPost = (id, item) => async (dispatch) => {
  dispatch({ type: UPADATE_POST_REQUEST });
  try {
    const data = await updatePost(id, item);
    dispatch({ type: UPADATE_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPADATE_POST_FAIL, payload: error.message });
  }
};
