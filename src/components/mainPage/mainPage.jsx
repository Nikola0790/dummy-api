import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsPosts } from "../../redux/posts/actions";

const MainPage = () => {
  const dispatch = useDispatch();
  const dataPosts = useSelector((state) => state.posts);
  const { loading, data, error } = dataPosts;

  useEffect(() => {
    dispatch(actionsPosts());
  }, [dispatch]);

  return (
    <div className="container">
      {loading ? (
        <p>LOADING</p>
      ) : error !== "" ? (
        <p>{error}</p>
      ) : (
        data.data.data.map((item) => {
          return (
            <div className="card-box" key={item.id}>
              <div className="owner-data">
                <div className="owner-img">
                  <img src={item.owner.picture} alt="profileImage" />
                </div>
                <div className="owner-details">
                  <p>
                    {item.owner.title}. {item.owner.firstName}{" "}
                    {item.owner.lastName}
                  </p>
                  <p>{item.publishDate}</p>
                </div>
              </div>
              <div className="post-data">
                <div className="post-img">
                  <img src={item.image} alt="postImage" />
                </div>
                <div className="post-details">
                  {/*  <p>{item.publishDate}</p> */}
                  <p>{item.text}</p>
                  <div className="tags">
                    {item.tags.map((tag, i) => (
                      <p key={i}>{tag}</p>
                    ))}
                  </div>
                  <p>likes: {item.likes}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MainPage;
