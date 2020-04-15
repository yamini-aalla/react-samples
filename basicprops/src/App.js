import React from 'react';
//import logo from './logo.svg';
import './App.css';
import States from './components/Setstate';
import { Fprops } from './components/Fprop';
import Test from './components/Cprops';
import Count from './components/Countstate';
import Propsmethod from './components/Propsmethod';

function App() {
    return ( <div className = "App">
        <Fprops name = "yamini" sname = "aalla" > hello gorgeous </Fprops> 
        <Fprops name = "anurag" sname = "thota" />
        <Fprops name = "chinni" sname = "aalla" />
        <Test name = "munni" />
        <Test name = "Padma" />
        <Test name = "Thrinadh" />
        <States />
        <Count />
        <Propsmethod />

        </div>
    );
}

export default App;