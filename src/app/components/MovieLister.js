import React from "react";

import './MovieLister.css'

export const MovieLister = props => {
  const movies = (props.movies && Array.isArray(props.movies) && props.movies) || [];
  return (
    <div className="row">
      {movies.map(movie => {
        {/* FUNCTIONAL_REQUIREMENT_FRONTEND_2 */ }
        {/* FUNCTIONAL_REQUIREMENT_FRONTEND_3 */ }
        return <div className="col-md-4 col-xs-6 box" key={movie.imdbID}>
          <img className="img-rounded img-responsive center-block" src={movie.Poster} />
          <h4 className="title">{movie.Title}</h4>
        </div>
      })}
    </div>
  );
}
