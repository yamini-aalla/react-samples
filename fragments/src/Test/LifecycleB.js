import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(){
        super()
        console.log(" Bconstructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log(" b getderivedstate")
        return null
    }
    componentDidMount(){
        console.log(" b componentdidmount")
    }
    shouldComponentUpdate(){
        console.log("bshouldupdating")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("bsnaphot")
    }
    componentDidUpdate(prevProps,prevState,snaphot)
    {
        console.log("bcomponentmount")
    }
    render() {
        return (
            <div>
                Lifecycle methods
                
            </div>
        );
    }
}

export default Lifecycle;