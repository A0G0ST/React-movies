import React from "react";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const get = JSON.parse(localStorage.getItem("movies"));
  const navigate = useNavigate();
  const display = (movie) => {
    navigate("/movies/" + movie.title, { state: { movie } });
  };
  const loggedIn = localStorage.getItem("Authorized");
  const remove = (index) => {
    const deleteIt = get.filter((movie) => movie.title !== index);
    localStorage.setItem("movies", JSON.stringify(deleteIt));
    window.location.reload();
  };
  const addMovie = () => {
    navigate("/movies/addMovie");
  };

  return (
    <div>
      <h1 className="display-header">Cinema</h1>
      <div className="movies">
        {get.map((movie) => {
          return (
            <div className="movie-item">
              <h3>{movie.title}</h3>
              <img className="img" src={movie.img} alt="pick"></img>
              <p className="movie-shortDescription">{movie.shortDescription}</p>
              <button className="more" onClick={() => display(movie)}>
                Read more
              </button>

              {loggedIn === movie.user && (
                <button className="remove" onClick={() => remove(movie.title)}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
                  </svg>
                </button>
              )}
              {loggedIn === movie.user && <p> This movie was added by you</p>}
            </div>
          );
        })}
      </div>

      <button className="addnew" onClick={addMovie}>
        Add new movie
      </button>
    </div>
  );
};

export default Display;
