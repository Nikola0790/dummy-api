import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsPosts } from "./redux/posts/actions"


function App() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(actionsPosts())
  }, [dispatch]);

  console.log(data)

  return <p>Hello</p>;
}

export default App;
