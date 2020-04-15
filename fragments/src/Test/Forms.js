import React, { Component } from 'react';

class Forms extends Component {
    constructor(){
        super()
        this.state={
            iname:'',
            check:'',
            inameerror:'',
            checkerror:''
        }
    }
    naming =(e) =>{
        this.setState({
            iname :e.target.value
        })
    }
    checking=(e) =>{
        this.setState({
            check :e.target.value
        })
    }
    valid =() =>{
        if(this.state.iname=== "" || this.state.iname === null){
            this.setState({
                inameerror:"name is invalid"
            })
        }
        else if(this.state.checkerror){
            this.setState({
                checkerror:"checkbox is not ticked"
            })
        }
        else{
            alert("logged successfully")
        }
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.naming}/>
                <div style={{color:"red"}}>{this.state.inameerror}</div>
                <input type="checkbox" onClick={this.checking}/>
                <div style={{color:"red"}}>{this.state.checkerror}</div>
                <button onClick={this.valid}>valid</button>
            </div>
        );
    }
}

export default Forms;