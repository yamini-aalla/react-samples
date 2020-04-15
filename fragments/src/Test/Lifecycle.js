import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(){
        super()
        console.log(" Aconstructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log(" A getderivedstate")
        return null
    }
    componentDidMount(){
        console.log(" A componentdidmount")
    }
    shouldComponentUpdate(){
        console.log("Ashouldupdating")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Asnaphot")
    }
    componentDidUpdate(prevProps,prevState,snaphot)
    {
        console.log("Acomponentmount")
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