import React, { Component } from 'react';

class Conditionalrender extends Component {
    constructor(){
        super()
        this.state={
            isLogin:true,
        }
    }
    render() {
        let message
    if(this.state.isLogin){
        message =<div> true </div>
    }
    else{
        message =<div> false </div>
    }
        return (
            <div>
                {message}

            </div>
        );
    }
}

export default Conditionalrender;