import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { updateInput } from "../app/githubSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const { input, fetchError } = useSelector((state) => state.github);

  const handleClick = () => {
    dispatch(updateInput(""));
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`/users/${input}`}>Home</Link>
          </li>

          <li>
            <Link
              to={!fetchError ? `/users/${input}/following` : `/users/${input}`}
            >
              Following
            </Link>
          </li>
          <li>
            <Link
              to={!fetchError ? `/users/${input}/repos` : `/users/${input}`}
            >
              Repos
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleClick}>
              Search
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
