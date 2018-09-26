import React from "react";

import './MovieLister.css'

export const MovieLister = props => {
  return (
    <div className="row">
      {props.movies.map(movie => {
        return <div className="col-md-4 col-xs-6" key={movie.imdbID}>
          <img className="img-rounded img-responsive center-block" src={movie.Poster} />
          <h4 className="title">{movie.Title}</h4>
        </div>
      })}
    </div>
  );
}
