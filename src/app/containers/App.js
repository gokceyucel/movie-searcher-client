import React from 'react';
import { connect } from 'react-redux';

import { searchMovies } from '../actions/searchActions';
import { SearchInput } from '../components/SearchInput';
import { MovieLister } from '../components/MovieLister';

import './App.css';

class App extends React.Component {
  render() {
    const {
      message,
      movies,
    } = this.props.search;

    
    return (
      <div className="container">
        {/* FUNCTIONAL_REQUIREMENT_FRONTEND_1 */}
        <SearchInput
          minLength={3}
          debounceTimeout={300}
          onChange={event => this.props.searchMovies(event.target.value)}
        />
        <div>{message}</div>
        <MovieLister movies={movies} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.searchReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovies: (keyword) => dispatch(searchMovies(keyword))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
