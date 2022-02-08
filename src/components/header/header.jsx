import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
      <div>
        <p>DUMMY API</p>
      </div>
      <div className="bttMain">
        <Link to="/mainPage">
          <button>Main Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
