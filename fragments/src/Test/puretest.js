import React, { Component } from 'react';
import Pure from './pure'
import Normal from './normal'
class Puretest extends Component {
    constructor(){
        super()
        this.state={
            name : ""
        }
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name:'yamini'
            })
        }, 2000)
    }
    render() {
        console.log("puretest")
        return (
            <div>
                <Pure name={this.state.name}/>
                <Normal name={this.state.name}/>
            </div>
        );
    }
}

export default Puretest;