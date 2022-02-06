import {SINGLE_POST_REQUEST, SINGLE_POST_SUCCESS, SINGLE_POST_FAIL} from './types';
import { getPostDetails } from '../../services/services';

export const actionsSinglePost = (id) => async (dispatch) => {
    dispatch({type: SINGLE_POST_REQUEST});
    try {
        const data = await getPostDetails(id);
        dispatch({type: SINGLE_POST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: SINGLE_POST_FAIL, payload: error.message});
    }
}