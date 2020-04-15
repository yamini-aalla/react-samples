import React,{useState} from 'react';
import {connect} from 'react-redux';
import { buyCake } from '../redux/cake/CakeAction';

function Cake(props) {
    const [number,setNumber]= useState(1)
    return (
        <div>
           <h2>Cake - {props.displayCake} </h2>
           <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
           <button onClick={() => props.buyCake(number)}>Buy X Cakes</button>
        </div>
    );
}
const mapStateToProps =(state) =>{
    return{
        displayCake: state.cake.numofCake
    }
}
const mapDispatchToProps = dispatch => {
    return {
      buyCake: (number) => dispatch(buyCake(number))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Cake);

