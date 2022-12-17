import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/index.css";
import App from "./App";
import SignupLoginLayout from "./Pages/SignupLoginLayout/SignupLogin";
import NewMovie from "./Pages/newMovieLayout/newMovie";
import Display from "./Pages/displayMoviesLayout/DisplayMovies";
import MoviePage from "./Pages/moviePageLayout/moviePage";
import All from "./Pages/AllLayout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<All />}>
        <Route index element={<App />}></Route>
        <Route path="/login" element={<SignupLoginLayout />}></Route>
        <Route path="/movies" element={<Display />}></Route>
        <Route path="/movies/addMovie" element={<NewMovie />}></Route>
        <Route path="/movies/:title" element={<MoviePage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
