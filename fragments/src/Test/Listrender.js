import React, { Component } from 'react';
import Listhtml from './Listhtml';
import Conditionalrender from './Conditionalrender'
import Forms from './Forms'

function Listrender(){
    const names=[{name:'yamini' , age:24},{name:'anurag', age:26}]
    return(
        <div>
        {
         names.map((i,index) => <Listhtml key={index} props={i}/>)
        }
        <Conditionalrender />
    <Forms />
       </div>
    
    )
    
}
export default Listrender;

