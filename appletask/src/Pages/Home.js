import React from "react";

const Home = ({ name, follower, isLoading, fetchError }) => {
  return (
    <div>
      <h1>Home</h1>
      {isLoading && <p>Loading data...</p>}
      {fetchError && <p style={{ color: "red" }}>Error: {fetchError}</p>}
      {!isLoading && !fetchError && (
        <>
          <p>Name: {name}</p>
          <p>Number of followers: {follower}</p>
        </>
      )}
    </div>
  );
};

export default Home;
