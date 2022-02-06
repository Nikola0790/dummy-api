import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actionsSinglePost } from "../../redux/singlePost/actions";

const SinglePostDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.singlePost);
    console.log(data);

    useEffect(() => {
        dispatch(actionsSinglePost(id));
    }, [dispatch])

    

    return <p>post details</p>
}

export default SinglePostDetails;