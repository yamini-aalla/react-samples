import React from 'react'
import {connect } from 'react-redux'
import {buyIcecream , buyCake} from '../redux'
function Mapcontainer (props){
    return(
        <div>
            <h1> item - {props.item} </h1>
            <button onClick={props.disitem}> buy item </button>
        </div>
    )
}
 const mapStateToProps =(state , ownProps) =>{
     
         const itemState = ownProps.icecream?  // ownProps act like props for mapstatetoprops and  //takes icecream passed in app.js parent component as props.
         state.icecream.numoficecereams:
         state.cake.numofcakes
     
         return {
             item : itemState
         }
 }
 const mapDispatchToProps =(dispatch , ownProps) =>{
     const items = ownProps.icecream ?
      
      () => dispatch(buyCake()):
      () => dispatch(buyIcecream()) 
     return{
        disitem : items
     }
 }
 export default  connect(mapStateToProps, mapDispatchToProps)(Mapcontainer)