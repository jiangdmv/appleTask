import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../app/githubSlice";
import axios from "axios";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const Repos = () => {
  const { name, follower, following, repos_url } = useSelector(getUser);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [repos, setRepos] = useState("");
  const [status, setStatus] = useState();

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await axios.get(url);
        setItems(res.data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(repos_url);
  }, [repos_url]);

  useEffect(() => {
    if (items.length === 0) return;
    const item = items[getRandomInt(items.length)];
    setRepos(item.full_name);
    setStatus(item.private);
  }, [items]);

  return (
    <>
      <h1>Repos</h1>
      {isLoading ? (
        <p>Loading data...</p>
      ) : fetchError ? (
        <p style={{ color: "red" }}>Error: {fetchError}</p>
      ) : items.length ? (
        <p>
          User {name} with {follower} followers is following {following}. One
          repo for this user is {repos} and it is{" "}
          {status ? "private" : "not private"}.
        </p>
      ) : (
        <p>
          User {name} with {follower} followers is following {following}. This
          user has no repos.
        </p>
      )}
    </>
  );
};

export default Repos;
