import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, updateInput } from "../../app/githubSlice";
import { useEffect } from "react";

const Home = () => {
  const { name, follower } = useSelector(getUser);
  const { status } = useSelector((state) => state.github);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "failed") {
      dispatch(updateInput(""));
      navigate("/missing");
    }
  }, [status]);

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
        <></>
      )}
    </div>
  );
};

export default Home;
