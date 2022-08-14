import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/system";
import Movies from "./Pages/Movies/Movies";
import Trending from "./Pages/Trending/Trending";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Header className="pageTitle" />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element = {<Trending />} exact />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
};

export default App;
