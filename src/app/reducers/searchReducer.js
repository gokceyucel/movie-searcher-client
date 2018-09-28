import {
  SEARCH_SEARCH_MOVIES_ERROR,
  SEARCH_SEARCH_MOVIES_SUCCESS,
  SEARCH_SEARCH_MOVIES_LOADING
} from '../constants/actionTypes';

const initialState = {
  movies: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    // FUNCTIONAL_REQUIREMENT_FRONTEND_6
    case SEARCH_SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
        message: ''
      };
    // FUNCTIONAL_REQUIREMENT_FRONTEND_6
    case SEARCH_SEARCH_MOVIES_ERROR:
      return {
        ...state,
        movies: [],
        message: action.payload.message
      };
    // FUNCTIONAL_REQUIREMENT_FRONTEND_6
    case SEARCH_SEARCH_MOVIES_LOADING:
      return {
        ...state,
        movies: [],
        message: 'Loading movies...'
      };
    default:
      return state;
  };
};

export default searchReducer;
