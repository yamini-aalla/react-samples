import React from 'react';

function Propschild(props){

        return ( <div>
            <button onClick = {props.final} > click </button> 
            <button onClick ={props.check} > call </button>
            </div>
        );
    
}

export default Propschild;