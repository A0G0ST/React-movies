import React from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const getMovies = localStorage.getItem("movies")
    ? JSON.parse(localStorage.getItem("movies"))
    : [];

  const navigate = useNavigate();
  const signupLogin = () => {
    navigate("/Login");
  };
  return (
    <div className="cinema">
      <h1 className="cinema-header">Welcome to the Cinema</h1>
      <div className="addMovie-btn-cont">
        <button className="addMovie-btn" onClick={signupLogin}>
          Add movie
        </button>
      </div>
      <div className="display-movie">
        {getMovies.map((movie) => {
          return (
            <div className="movie">
              <h2 className="title">{movie.title}</h2>
              <img className="img" src={movie.img} alt="shu"></img>
              <p className="shortDescription">{movie.shortDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
