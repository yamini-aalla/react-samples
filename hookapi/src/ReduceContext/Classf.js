import React,{useReducer, useContext} from 'react';
import {Userreduce} from '../App'
function Classf(props) {
    const countcontext = useContext(Userreduce)
    return (
        <div>
            Component C
            <button onClick={() =>countcontext.dispatchred("Increment")}>increment</button>
            <button onClick={() =>countcontext.dispatchred("Decrement")}>decrement</button>
            <button onClick={() =>countcontext.dispatchred("Reset")}>reset</button>
        </div>
    );
}

export default Classf;