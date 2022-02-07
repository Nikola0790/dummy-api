import {useSelector} from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/services";

const CreatePost = () => {
  const navigate = useNavigate();
  const dataO = useSelector(state => state.singlePost);
  const {loading, data, error} = dataO;
  const [owner, setOwnerId] = useState(data.data.owner.id);
  const [image, setImage] = useState(data.data.image);
  const [text , setText] = useState('');
  const [likes, setLikes] = useState(0);
  const [tagsss, setTags] = useState('');

  const createNewPost = (e) => {
    e.preventDefault();
    let tags = tagsss;
    if (tagsss === "") {
      tags = [];
    } else {
      tags = tagsss.split(",");
    }
    createPost({owner, image, text, likes, tags});
    navigate('/mainPage');
  } 

  return (
    <div className="container-edit-post">
      {loading ? (
        <p>LOADING</p>
      ) : error !== "" ? (
        <p>{error}</p>
      ) : (
        <>
          <h1>CREATE POST</h1>
          <form action="">
            <p>Owner ID</p>
            <input
              type="text"
              value={owner}
              onChange={(e) => setOwnerId(e.target.value)}
            /> 
            <p>Text</p>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <p>Image URL</p>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <p>Tags</p>
            <input
              type="text"
              value={tagsss}
              onChange={(e) => setTags(e.target.value)}
            />
            <p>Likes</p>
            <input
              type="text"
              value={likes}
              onChange={(e) => setLikes(e.target.value)}
            />
            <button onClick={(e) => createNewPost(e)}>Create post</button>
          </form>
        </>
      )}
    </div>
  ) 
}

export default CreatePost;