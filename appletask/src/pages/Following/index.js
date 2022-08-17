import { useSelector, useDispatch } from "react-redux";
import { updateFollowing, getUser } from "../../app/githubSlice";
import "./index.css";

const Following = () => {
  const { following } = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1 onClick={() => dispatch(updateFollowing())}>Following</h1>
        <p>Number of following: {following}</p>
        <button onClick={() => dispatch(updateFollowing())}>Add 10</button>
      </div>
    </>
  );
};

export default Following;
