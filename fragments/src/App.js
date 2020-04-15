import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listrender from './Test/Listrender'
import Lifecycle from './Test/Lifecycle'
import Puretest from './Test/puretest'
function App() {
  return (
    <div className="App">
     <Listrender/>
     <Lifecycle />
     <Puretest />
    </div>
  );
}

export default App;
