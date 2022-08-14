import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Search from "./Pages/Search";
import Home from "./Pages/Home";
import Following from "./Pages/Following";
import Repos from "./Pages/Repos";
import Layout from "./Pages/Layout";

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/users/:input" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="following" element={<Following />} />
          <Route path="repos" element={<Repos />} />
        </Route>
      </Routes>
    </Provider>
  );
}
