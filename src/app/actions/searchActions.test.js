import configureMockStore from 'redux-mock-store';
import {
  SEARCH_SEARCH_MOVIES_ERROR,
  SEARCH_SEARCH_MOVIES_SUCCESS,
  SEARCH_SEARCH_MOVIES_LOADING
} from '../constants/actionTypes';
import { searchMovies } from './searchActions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('searchMovies action', () => {
  let store;
  let httpMock;

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    httpMock = new MockAdapter(axios);
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  it('returns movies payload after a successful api request', async () => {
    const searchApiUrl = `http://localhost:8080/api/search?keyword=galaxy`;
    const body = [{
      "Title": "Guardians of the Galaxy",
      "Year": "2014",
      "imdbID": "tt2015381",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"
    }];

    httpMock.onGet(searchApiUrl).reply(200, body);

    searchMovies('galaxy')(store.dispatch);
    await flushAllPromises();

    expect(store.getActions()).toEqual([
      { type: SEARCH_SEARCH_MOVIES_LOADING },
      { type: SEARCH_SEARCH_MOVIES_SUCCESS, payload: { movies: body } }
    ])
  });

  it('returns an error message in case of a network error during api request', async () => {
    const searchApiUrl = `http://localhost:8080/api/search?keyword=galaxy`;

    httpMock.onGet(searchApiUrl).networkError();

    let errorMessage = ''
    try {
      await axios.get(searchApiUrl);
    } catch (ex) {
      errorMessage = ex.message;
    }

    searchMovies('galaxy')(store.dispatch);
    await flushAllPromises();

    expect(store.getActions()).toEqual([
      { type: SEARCH_SEARCH_MOVIES_LOADING },
      { type: SEARCH_SEARCH_MOVIES_ERROR, payload: { message: errorMessage } }
    ])
  });
  
  it('returns a loading state during api request', async () => {
    const searchApiUrl = `http://localhost:8080/api/search?keyword=galaxy`;

    httpMock.onGet(searchApiUrl).reply(200, {});

    searchMovies('galaxy')(store.dispatch);
    await flushAllPromises();

    expect(store.getActions()).toContainEqual({ type: SEARCH_SEARCH_MOVIES_LOADING });
  });

});
