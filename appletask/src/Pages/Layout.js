import { Outlet, Link } from "react-router-dom";

const Layout = ({
  input,
  setInput,
  setName,
  setFollower,
  setFollowing,
  setItems,
  fetchError,
  setFetchError,
}) => {
  const handleClick = () => {
    setInput("");
    setName("");
    setFollower(0);
    setFollowing(0);
    setItems([]);
    setFetchError(null);
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={input ? `/users/${input}` : "/users"}>Home</Link>
          </li>

          <li>
            <Link to={input ? `/users/${input}/following` : "/users"}>
              Following
            </Link>
          </li>
          <li>
            <Link to={input ? `/users/${input}/repos` : "/users"}>Repos</Link>
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
