import React,{useContext} from 'react';
import {Userreduce} from '../App'
function Classa(props) {
    const countcontext = useContext(Userreduce);
    return (
        <div>
            Component A
            <button onClick={() =>countcontext.dispatchred("Increment")}>increment</button>
            <button onClick={() =>countcontext.dispatchred("Decrement")}>decrement</button>
            <button onClick={() =>countcontext.dispatchred("Reset")}>reset</button>
        </div>
    );
}

export default Classa;