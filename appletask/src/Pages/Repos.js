import { useEffect, useState } from "react";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const Repos = ({ name, follower, following, items, isLoadingRepos }) => {
  const [repos, setRepos] = useState("");
  const [status, setStatus] = useState();

  useEffect(() => {
    if (isLoadingRepos || items.length === 0) return;
    const item = items[getRandomInt(items.length)];
    setRepos(item.full_name);
    setStatus(item.private);
  }, [items]);

  return (
    <>
      <h1>Repos</h1>
      {!isLoadingRepos && items.length ? (
        <p>
          User {name} with {follower} followers is following {following}. One
          repo for this user is {repos} and it is{" "}
          {status ? "private" : "not private"}.
        </p>
      ) : (
        <p>This user has no repos</p>
      )}
    </>
  );
};

export default Repos;
