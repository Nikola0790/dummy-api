import {SINGLE_POST_REQUEST, SINGLE_POST_SUCCESS, SINGLE_POST_FAIL} from './types';

const initialState = {
    loading: true,
    data: [],
    error: "",
}

const reducerSinglePostDetails = (state= initialState, action) => {
    switch (action.type) {
        case SINGLE_POST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SINGLE_POST_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: "",
            }
        case SINGLE_POST_FAIL:
            return {
                loading: false,
                data: [],
                error: action.payload,
            }
        default:
            return state;
    }
} 

export default reducerSinglePostDetails;