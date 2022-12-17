import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewMovie = () => {
  const movieImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjS40lphzSFzZB5PQFZ3SuJ03tOEkDFZHulebH-BgKcCBpSllCmuVdw2IQVGnUJ-NkslU&usqp=CAU";

  const movie = {
    user: "",
    title: "",
    img: "" || movieImg,
    shortDescription: "",
    longDescription: "",
  };
  const [movies, addMovie] = useState(
    localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : []
  );
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const authUser = localStorage.getItem("Authorized");
    movie.user = authUser;
    addMovie([...movies, movie]);
    localStorage.setItem("movies", JSON.stringify([...movies, movie]));
    navigate("/movies");
  };

  return (
    <div className="newMovie">
      <h1 className="newMovie-header">Add a movie to the cinema</h1>
      <form onSubmit={onSubmit}>
        <input
          className="newMovie-input"
          type="text"
          placeholder="Movie Title"
          onChange={(e) => (movie.title = e.target.value)}
          required
        />

        <input
          className="newMovie-input"
          type="text"
          placeholder="Short description"
          onChange={(e) => (movie.shortDescription = e.target.value)}
          required
        />
        <input
          className="newMovie-input"
          type="text"
          placeholder="In depth description"
          onChange={(e) => (movie.longDescription = e.target.value)}
          required
        />
        <button className="newMovie-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewMovie;
