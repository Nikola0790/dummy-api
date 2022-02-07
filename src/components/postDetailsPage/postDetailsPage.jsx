import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actionsSinglePost } from "../../redux/singlePost/actions";
import { Link } from "react-router-dom";

const SinglePostDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const dataPost = useSelector(state => state.singlePost);
    const checkEdit = useSelector(state => state.editedPost.loading);
    const {loading, data, error} = dataPost;

    useEffect(() => {
        dispatch(actionsSinglePost(id));
    }, [dispatch, checkEdit]);
    

    return (
        <div className="container-singlePost">
            {loading ? (
                <p>LOADING</p>
            ) : error !== "" ? (
                <p>{error}</p>
            ) : (
                <>
                    <div className="single-post-title">
                        <p>{data.data.text}</p>
                    </div>
                    <div className="single-post-image">
                        <img src={`${data.data.image}`} alt="post-picture" />
                    </div>
                    <div className="single-post-likes-tags">
                        <p><i className="material-icons">thumb_up</i>&nbsp;&nbsp; {data.data.likes}</p>
                        <div>
                            {data.data.tags.map((tag, i) => (
                                <p key={i}>#{tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className="single-post-owner-data">
                        <div className="owner-picture">
                            <img src={`${data.data.owner.picture}`} alt="owner-pic" />
                        </div>
                        <div className="owner-name-id">
                            <p>{data.data.owner.title}. {data.data.owner.firstName} {data.data.owner.lastName}</p>
                            <p>ID: {data.data.owner.id}</p>
                        </div>
                        <Link to="/editPost">
                            <button>EDIT POST</button>
                        </Link>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default SinglePostDetails;