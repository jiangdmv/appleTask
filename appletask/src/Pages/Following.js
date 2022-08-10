const Following = ({ following, setFollowing }) => {
  const handleClick = () => {
    setFollowing((prev) => prev + 10);
  };

  return (
    <>
      <h1>Following</h1>
      <p>{following}</p>
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default Following;
