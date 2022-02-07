import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsEditPost } from "../../redux/editPost/actions";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataSinglePost = useSelector((state) => state.singlePost);
  const { loading, data, error } = dataSinglePost;
  const [text, setText] = useState(data.data.text);
  const [image, setImage] = useState(data.data.image);
  const [tag, setTags] = useState(data.data.tags);

  const updatePost = (e) => {
    e.preventDefault();
    const date = new Date();
    let tags = tag;
    if (typeof tag === "string") {
      tags = tag.split(",");
    }
    dispatch(actionsEditPost(data.data.id, { text, image, tags, date }));
    navigate(`/postDetails/${data.data.id}`);
  };

  return (
    <div className="container-edit-post">
      {loading ? (
        <p>LOADING</p>
      ) : error !== "" ? (
        <p>{error}</p>
      ) : (
        <>
          <h1>EDIT POST</h1>
          <form action="">
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
              value={tag}
              onChange={(e) => setTags(e.target.value)}
            />
            <button onClick={(e) => updatePost(e)}>Update</button>
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
