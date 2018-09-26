const searchReducer = (state = {
  movies: [],
}, action) => {
  switch (action.type) {
    case 'SEARCH_SEARCH_MOVIES_SUCCESS': //redux-promise-middleware
      state = {
        ...state,
        movies: action.payload
      };
      break;
    case 'SEARCH_SEARCH_MOVIES_ERROR':
      state = {
        ...state,
        movies: action.payload
      }
      break;
  }

  return state;
};

export default searchReducer;
