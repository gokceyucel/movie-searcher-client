const searchReducer = (state = {
  movies: [],
}, action) => {
  switch (action.type) {
    // FUNCTIONAL_REQUIREMENT_FRONTEND_6
    case 'SEARCH_SEARCH_MOVIES_SUCCESS':
      state = {
        ...state,
        movies: action.payload.movies,
        message: ''
      };
      break;
    // FUNCTIONAL_REQUIREMENT_FRONTEND_6
    case 'SEARCH_SEARCH_MOVIES_ERROR':
      state = {
        ...state,
        movies: [],
        message: action.payload.message
      };
      break;
    // FUNCTIONAL_REQUIREMENT_FRONTEND_6
    case 'SEARCH_SEARCH_MOVIES_LOADING':
      state = {
        ...state,
        movies: [],
        message: 'Loading movies...'
      };
      break;
  };

  return state;
};

export default searchReducer;
