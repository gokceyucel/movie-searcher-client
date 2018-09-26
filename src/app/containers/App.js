import React from 'react';
import { connect } from 'react-redux';

import { setName } from '../actions/userActions';
import { searchMovies } from '../actions/searchActions';

import { SearchInput } from '../components/SearchInput';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    event.persist();
    setTimeout(() => {
      this.props.searchMovies(event.target.value)
    }, 1000);
  }

  render() {
    return (
      <div className="container">

        <SearchInput
          minLength={3}
          debounceTimeout={300}
          onChange={event => this.props.searchMovies(event.target.value)}
        />

        {this.props.search.movies.map(movie => {
          return <div key={movie.imdbID}>{movie.Title}</div>
        })}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer,
    search: state.searchReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(setName(name)),
    searchMovies: (keyword) => dispatch(searchMovies(keyword))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
