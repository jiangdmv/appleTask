import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Following from "./pages/Following";
import Repos from "./pages/Repos";
import Layout from "./pages/Layout";
import Missing from "./pages/Missing";

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<Search />} />
        <Route path="users/:input" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="following" element={<Following />} />
          <Route path="repos" element={<Repos />} />
        </Route>
        <Route path="missing" element={<Missing />} />
      </Routes>
    </Provider>
  );
}
