import React from 'react'
import {connect }from 'react-redux'
import {buyCake} from '../redux'
function Cake (props){
    return(
        <div>
            <h2>Cake Container - {props.numofcakes}</h2>
            <button onClick ={props.buycake}>click</button>

        </div>
    )
}
const mapStatetoProps = (state) =>{
    return{
        numofcakes : state.cake.numofcakes   // allows to add numofcakes to h2 as props , takes state as argument
    }
}

const mapDispatchtoProps =(dispatch) =>{
    return{
        buycake : () => dispatch(buyCake()) //it takes action creator returns function
    }
}
export default connect(mapStatetoProps , mapDispatchtoProps)(Cake) 

//connect connects react component cake to redux 