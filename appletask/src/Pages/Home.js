import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../app/githubSlice";

const Home = () => {
  const { name, follower } = useSelector(getUser);
  const { fetchError, status } = useSelector((state) => state.github);

  return (
    <div>
      <h1>Home</h1>

      {status === "loading" ? (
        <p>Loading data...</p>
      ) : status === "success" ? (
        <>
          <p>Name: {name}</p>
          <p>Number of followers: {follower}</p>
        </>
      ) : (
        <p style={{ color: "red" }}>Error: {fetchError}</p>
      )}
    </div>
  );
};

export default Home;
