const Search = ({ input, setInput, handleClick }) => {
  return (
    <div>
      <h1>Search</h1>
      <p>Input user name</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Search;
