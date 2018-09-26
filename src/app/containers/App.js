import React from 'react';
import { connect } from 'react-redux';

import { setName } from '../actions/userActions';
import { searchMovies } from '../actions/searchActions';

import { User } from '../components/User';
import { Main } from '../components/Main';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName('Aha')} />
        <User username={this.props.user.name} />




        <button
          className="btn btn-primary"
          onClick={() => this.props.searchMovies('heroes')}> search movies heroes
        </button>
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
