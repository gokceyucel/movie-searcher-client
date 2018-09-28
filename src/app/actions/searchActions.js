import axios from 'axios';
import {
  SEARCH_SEARCH_MOVIES_ERROR,
  SEARCH_SEARCH_MOVIES_SUCCESS,
  SEARCH_SEARCH_MOVIES_LOADING
} from '../constants/actionTypes';

const fetchMovieSuccess = data => {
  if (data.Response === 'False') {
    return {
      type: SEARCH_SEARCH_MOVIES_ERROR,
      payload: { message: data.Error }
    };
  }

  return {
    type: SEARCH_SEARCH_MOVIES_SUCCESS,
    payload: { movies: data }
  };
}

const fetchMovieFailed = err => {
  return {
    type: SEARCH_SEARCH_MOVIES_ERROR,
    payload: { message: err.message }
  };
}

const fetchMovieRequest = () => {
  return {
    type: SEARCH_SEARCH_MOVIES_LOADING
  };
}

const searchMovies = keyword => {
  return dispatch => {
    dispatch(fetchMovieRequest());
    axios.get(`http://${process.env.API_URL}:${process.env.API_PORT}/api/search?keyword=${keyword}`)
      .then(response => response.data)
      .then(movies => dispatch(fetchMovieSuccess(movies)))
      .catch(err => dispatch(fetchMovieFailed(err)));
  }
};

export {
  searchMovies
};
