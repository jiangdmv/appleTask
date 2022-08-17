import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Missing = () => {
  const { fetchError } = useSelector((state) => state.github);

  return (
    <div>
      <h2>{fetchError}</h2>
      <p>Well that is disappointing...</p>
      <p>
        <Link to="/">Search again</Link>
      </p>
    </div>
  );
};

export default Missing;
