import React from 'react';
import { connect } from 'react-redux';

import { setName } from '../actions/userActions';

import { User } from '../components/User';
import { Main } from '../components/Main';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName('Aha')} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(setName(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
