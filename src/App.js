import "./css/style.css";
import MainPage from "./components/mainPage/mainPage";
import Header from "./components/header/header";
import SinglePostDetails from './components/postDetailsPage/postDetailsPage';
import EditPost from "./components/editPage/editPostPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Header />
      <Routes>
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/postDetails/:id" element={<SinglePostDetails />} />
        <Route path="/" element={<Navigate to="/mainPage" />} />
        <Route path="/editPost" element={<EditPost />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
