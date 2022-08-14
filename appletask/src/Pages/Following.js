import { useSelector, useDispatch } from "react-redux";
import { updateFollowing, getUser } from "../app/githubSlice";

const Following = () => {
  const { following } = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Following</h1>
      <p>{following}</p>
      <button onClick={() => dispatch(updateFollowing())}>Add</button>
    </>
  );
};

export default Following;
