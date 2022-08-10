import { Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";
import Home from "./Pages/Home";
import Following from "./Pages/Following";
import Repos from "./Pages/Repos";
import Layout from "./Pages/Layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [name, setName] = useState("");
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoadingRepos, setIsLoadingRepos] = useState(true);

  const navigate = useNavigate();

  const handleClick = () => {
    const fetchData = async (q) => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${q}`);
        if (!response.ok) throw Error("Did not receive expected data");
        const userData = await response.json();
        setData(userData);
        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(input);
    navigate("/users/" + input);
  };

  useEffect(() => {
    if (isLoading || fetchError) return;

    setName(data.name);
    setFollower(data.followers);
    setFollowing(data.followers + 10);

    const repos_URL = data.repos_url;

    const fetchData = async (url) => {
      setIsLoadingRepos(true);
      try {
        const response = await fetch(url);
        const reposData = await response.json();
        setItems(reposData);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoadingRepos(false);
      }
    };
    fetchData(repos_URL);
  }, [data]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Search input={input} setInput={setInput} handleClick={handleClick} />
        }
      />
      <Route
        element={
          <Layout
            input={input}
            setInput={setInput}
            setName={setName}
            setFollower={setFollower}
            setFollowing={setFollowing}
            setItems={setItems}
            fetchError={setFetchError}
            setFetchError={setFetchError}
          />
        }
      >
        <Route
          path={input ? "/users/:input" : "/users"}
          element={
            <Home
              name={name}
              follower={follower}
              isLoading={isLoading}
              fetchError={fetchError}
            />
          }
        />
        <Route
          path="/users/:input/following"
          element={
            <Following following={following} setFollowing={setFollowing} />
          }
        />
        <Route
          path="/users/:input/repos"
          element={
            <Repos
              name={name}
              follower={follower}
              following={following}
              items={items}
              isLoadingRepos={isLoadingRepos}
            />
          }
        />
      </Route>
    </Routes>
  );
}
