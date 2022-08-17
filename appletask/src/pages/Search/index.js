import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInput, fetchApi } from "../../app/githubSlice";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./index.css";

const Search = () => {
  const { input } = useSelector((state) => state.github);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      dispatch(updateInput(""));
      return;
    }
    dispatch(fetchApi(input));
    navigate("/users/" + input);
  };

  return (
    <div>
      <h1>Search</h1>
      <p>Input user name</p>
      <form onSubmit={handleClick}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => dispatch(updateInput(e.target.value))}
        />
        <button
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
