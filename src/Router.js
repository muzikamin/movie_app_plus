import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Search } from "./Pages/Search/Search";
import { PageNotFound } from "./PageNotFound";
import { routes } from "./routes";
import { Detail } from "./Pages/Detail/Detail";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.Search} element={<Search />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
