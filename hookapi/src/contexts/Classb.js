import React, { useContext } from 'react';
import Classc from './Classc';
import {Usercontext ,Usercreator} from '../App'
function Classb(props) {
    const name = useContext(Usercontext);
    const val = useContext(Usercreator);
    return (
        <div>
            {name} is {val}  printed by hooks
        </div>
    );
}

export default Classb;