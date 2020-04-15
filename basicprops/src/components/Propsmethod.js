import React, { Component } from 'react';
import Propschild from './Propschild';
class Propsmethod extends Component {
    constructor() {
        super()
        this.state = {
            name: 'aalla yamini',
        }
        //this.Checking = this.Checking.bind(this)

    }
    Checking = () => {
        alert(`this is my name ${this.state.name}`)
    }
    calling =() =>{
        alert(`hello ${7}`)
    }
    render() {
        return ( <div>
            <Propschild final = { this.Checking }/>
            <Propschild check ={this.calling} />
             </div>)
            }
        
    }


export default Propsmethod;