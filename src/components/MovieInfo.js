import React from "react";
import { imgPost } from "../constants";
import Styles from "../assets/stylesheets/MovieInfo.module.css";
import stars from "../assets/images/stars.svg"

const MovieInfo = ({ movie }) => {
  return (
    <div>
      <h1 className={Styles.title}>{movie.title}</h1>
      <div
        className={Styles.poster}
        style={{
          backgroundImage: `url(${imgPost + movie.backdrop_path})`,
        }}
      ></div>
      <div className={Styles.info}>
        <div className={Styles.text}>
          <h2> Description </h2>
          <p>{movie.overview}</p>
          <p>{movie.tagline}</p>
        </div>
        <div className={Styles.rates}>
            <img className={Styles.star} src={stars} alt="Star"/>
            <h1>{movie.vote_average}</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
