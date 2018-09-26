import axios from 'axios';

const searchMovies = keyword => {
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: 'USER_SET_NAME',
  //       payload: name
  //     });
  //   }, 2000);
  // }

  // return {
  //   type: 'SEARCH_SEARCH_MOVIES',
  //   payload: new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(name);
  //     }, 2000);
  //   })
  // };

  // return async dispatch => {

  //   var response = await axios.get(`http://localhost:8080/api/search?keyword=${keyword}`);
  //   var movies = response.data;

  //   dispatch({
  //     type: 'SEARCH_SEARCH_MOVIES',
  //     payload: movies
  //   });
  // }

  if (keyword.length < 3) return;

  return dispatch => {

    axios.get(`http://localhost:8080/api/search?keyword=${keyword}`)
      .then(response => {

        var movies = response.data;

        dispatch({
          type: 'SEARCH_SEARCH_MOVIES_SUCCESS',
          payload: movies
        });
      })
      .catch(err => {

        dispatch({
          type: 'SEARCH_SEARCH_MOVIES_ERROR',
          payload: err
        });
      })
    
  }
}

export {
  searchMovies
};
