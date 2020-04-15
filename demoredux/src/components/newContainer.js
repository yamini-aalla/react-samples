import React , {useState} from 'react'
import {connect }from 'react-redux'
import {buyIcecream} from '../redux'

function NewContainer (props){
    const [number , setNumber] = useState()
    return(
        <div>
            <h2>icecream Container - {props.numoficecreams}</h2>
            <button onClick ={() => props.buyicecream(number)}>buy {number}</button>
            <input type ="text" value ={number} onChange ={e => setNumber(e.target.value)} />

        </div>
    )
}
const mapStatetoProps = (state) =>{
    return{
        numoficecreams : state.icecream.numoficecereams   // allows to add numofcakes to h2 as props , takes state as argument
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        buyicecream : (number) => dispatch(buyIcecream(number)) //it takes action creator returns function
    }
}
export default connect(mapStatetoProps , mapDispatchToProps)(NewContainer) 

//connect connects react component cake to redux 