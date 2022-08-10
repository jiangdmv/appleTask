import { Outlet, Link } from "react-router-dom";

const Layout = ({
  input,
  setInput,
  setName,
  setFollower,
  setFollowing,
  setItems,
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
            <Link to={`/users/${input}`}>Home</Link>
          </li>

          <li>
            <Link to={input ? `/users/${input}/following` : "#"}>
              Following
            </Link>
          </li>
          <li>
            <Link to={input ? `/users/${input}/repos` : "#"}>Repos</Link>
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
