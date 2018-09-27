import axios from 'axios';

const searchMovies = keyword => {
  return dispatch => {

    dispatch({
      type: 'SEARCH_SEARCH_MOVIES_LOADING'
    });

    axios.get(`http://${process.env.API_URL}:${process.env.API_PORT}/api/search?keyword=${keyword}`)
      .then(response => {
        var movies = response.data;

        if (movies.Response === 'False') {
          return dispatch({
            type: 'SEARCH_SEARCH_MOVIES_ERROR',
            payload: {
              message: movies.Error
            }
          })
        }

        dispatch({
          type: 'SEARCH_SEARCH_MOVIES_SUCCESS',
          payload: {
            movies
          }
        });
      })
      .catch(err => {

        dispatch({
          type: 'SEARCH_SEARCH_MOVIES_ERROR',
          payload: {
            message: err.message
          }
        });
      })

  }
};

export {
  searchMovies
};
