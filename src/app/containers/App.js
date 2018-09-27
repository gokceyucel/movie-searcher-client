import React from 'react';
import { connect } from 'react-redux';

import { searchMovies } from '../actions/searchActions';
import { SearchInput } from '../components/SearchInput';
import { MovieLister } from '../components/MovieLister';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">

        <SearchInput
          minLength={3}
          debounceTimeout={300}
          onChange={event => this.props.searchMovies(event.target.value)}
        />

        <MovieLister movies={this.props.search.movies} />

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
