import { useSelector, useDispatch } from "react-redux";
import { updateFollowing, getUser } from "../../app/githubSlice";

const Following = () => {
  const { following } = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <>
      <h1 onClick={() => dispatch(updateFollowing())}>Following</h1>
      <p>Number of following: {following}</p>
      <button onClick={() => dispatch(updateFollowing())}>Add 10</button>
    </>
  );
};

export default Following;
