import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { updateInput } from "../../app/githubSlice";
import "./index.css";

const Layout = () => {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state.github);

  const handleClick = () => {
    dispatch(updateInput(""));
  };

  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/users/${input}`}>Home</Link>
            </li>

            <li>
              <Link to={`/users/${input}/following`}>Following</Link>
            </li>
            <li>
              <Link to={`/users/${input}/repos`}>Repos</Link>
            </li>
            <li>
              <Link to="/" onClick={handleClick}>
                Search
              </Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
