import React from 'react'
import {connect }from 'react-redux'
import {buyIcecream} from '../redux'
function Icecream (props){
    return(
        <div>
            <h2>icecream Container - {props.numoficecreams}</h2>
            <button onClick ={props.buyicecream}>click</button>

        </div>
    )
}
const mapStatetoProps = (state) =>{
    return{
        numoficecreams : state.icecream.numoficecereams   // allows to add numofcakes to h2 as props , takes state as argument
    }
}

const mapDispatchtoProps =(dispatch) =>{
    return{
        buyicecream : () => dispatch(buyIcecream()) //it takes action creator returns function
    }
}
export default connect(mapStatetoProps , mapDispatchtoProps)(Icecream) 

//connect connects react component cake to redux 