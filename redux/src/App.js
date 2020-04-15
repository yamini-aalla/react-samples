import React from 'react';
import './App.css';
import Cake from './components/Cake'
import store from './redux/store'
import {Provider} from 'react-redux'
import Ice from './components/Ice'
import User from './components/User'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <User />
      <Cake />
     <Ice />
    </div>
    </Provider>
  );
}

export default App;
