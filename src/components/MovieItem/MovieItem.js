import React from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/actions/actions";
import "./MovieItem.css";

function MovieItem({ Title, Year, Poster, imdbID, disabled }) {
  const dispatch = useDispatch();
  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          type="button"
          className="movie-item__add-button"
          onClick={() => dispatch(addMovie(imdbID))}
          disabled={disabled}
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
}

export default MovieItem;
