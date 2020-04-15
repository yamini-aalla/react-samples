import React, { Component } from 'react';
import {buyCake} from '../redux'
import {useSelector , useDispatch} from 'react-redux'
function HooksContainer (){
    const numofcakes = useSelector(state => state.cake.numofcakes)
    const dispatch = useDispatch()
        return (
            <div>
                <h2>Num of Hook Cakes - {numofcakes}</h2>
                <button onClick={() => dispatch(buyCake())}>click hooks</button>
            </div>
        );
   
}

export default HooksContainer;