// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
  backgroundColor: string,
};

class App extends Component<Props> {
  render() {
    return (
      <div className="App" style={{backgroundColor: this.props.backgroundColor}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
