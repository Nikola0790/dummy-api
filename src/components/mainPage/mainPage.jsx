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
                  <p>
                    {new Date(item.publishDate).getMonth() + 1 === 1 ? 'Jan': new Date(item.publishDate).getMonth() + 1 === 2 ? 'Feb' : new Date(item.publishDate).getMonth() + 1 === 3 ? 'Mar': new Date(item.publishDate).getMonth() + 1 === 4 ? 'Apr' : new Date(item.publishDate).getMonth() + 1 === 5 ? 'May' : new Date(item.publishDate).getMonth() + 1 === 6 ? 'Jun' : new Date(item.publishDate).getMonth() + 1 === 7 ? 'July' : new Date(item.publishDate).getMonth() + 1 === 8 ? 'Aug' : new Date(item.publishDate).getMonth() + 1 === 9 ? 'Sep' : new Date(item.publishDate).getMonth() + 1 === 10 ? 'Oct' : new Date(item.publishDate).getMonth() + 1 === 11 ? 'Nov' : new Date(item.publishDate).getMonth() + 1 === 12 ? 'Dec' : "Jan"}
                    {" "}{new Date(item.publishDate).getDate()} {" "} {new Date(item.publishDate).getFullYear()}&nbsp;&nbsp;&nbsp;
                    {new Date(item.publishDate).getHours()}:{new Date(item.publishDate).getMinutes()}:{new Date(item.publishDate).getSeconds()}
                  </p>
                </div>
              </div>
              <div className="post-data">
                <div className="post-img">
                  <img src={item.image} alt="postImage" />
                </div>
                <div className="post-details">
                  {/*  <p>{item.publishDate}</p> */}
                  <p className="post-title">{item.text}</p>
                  <div className="tags">
                    {item.tags.map((tag, i) => (
                      <p key={i}>{tag}</p>
                    ))}
                  </div>
                  <p><i class="material-icons">thumb_up</i>&nbsp;&nbsp;{item.likes}</p>
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
