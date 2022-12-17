import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MoviePage = () => {
  const backToCinema = () => {
    navigate(-1);
  };
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="showmore">
      <h1>{location.state.movie.title}</h1>
      <img src={location.state.movie.img} alt="pick"></img>
      <h4>In depth Description:</h4>
      <p>{location.state.movie.longDescription}</p>
      <button className="goBack" onClick={backToCinema}>
        Back to cinema
      </button>
    </div>
  );
};

export default MoviePage;
