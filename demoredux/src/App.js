import React from 'react';
import Cake from './components/cakeContainer'
import Icecream from './components/icecreamContainer'
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/cakeStore'
import HooksContainer from './components/HooksContainer'
 import NewContainer from './components/newContainer'
import Mapcontainer from './components/Mapcontainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    //provider should always be on top
    <Provider store ={store} > 
    <div className="App"> 
    {/* <HooksContainer />
      <Cake />
      <Icecream />
      <NewContainer />
      <Mapcontainer />
      <Mapcontainer icecream/> */}
      <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
