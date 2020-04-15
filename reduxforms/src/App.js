import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './components/store';
import Simplefrom from './components/Simplefrom';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ padding: 15 }}>
          <h2>Simple Form</h2>
          <Simplefrom />
        </div>
      </Provider>
    );
  }
}

export default App;