import searchReducer from './searchReducer';
import { SEARCH_SEARCH_MOVIES_SUCCESS } from '../constants/actionTypes';

describe('search reducer', () => {
  it('returns initial state', () => {
    expect(searchReducer(undefined, {})).toEqual({ movies: [] });
  });

  it('sets up fetched movies', () => {
    const beforeState = { movies: [] };
    const action = {
      type: SEARCH_SEARCH_MOVIES_SUCCESS,
      payload: {
        movies: [
          {
            "Title": "Guardians of the Galaxy",
            "Year": "2014",
            "imdbID": "tt2015381",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"
          }
        ]
      }
    }

    const afterState = searchReducer(beforeState, action);

    expect(afterState).toEqual({
      movies: [
        {
          "Title": "Guardians of the Galaxy",
          "Year": "2014",
          "imdbID": "tt2015381",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"
        }
      ],
      message: ''
    })
  });
});
