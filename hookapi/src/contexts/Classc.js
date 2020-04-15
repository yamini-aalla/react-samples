import React from 'react';
import {Usercontext ,Usercreator} from '../App'
function Classc(props) {
    return (
        <div>
           <Usercontext.Consumer>
               {
                   name =>{
                       return(
                       <Usercreator.Consumer>
                           {val => {return (<div>
                               {name} is {val}
                           </div>)}}
                       </Usercreator.Consumer>
                       )
                   }
               }
           </Usercontext.Consumer>
           
        </div>
    );
}

export default Classc;


