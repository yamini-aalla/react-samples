import React,{Component} from 'react';
class States extends Component{
	constructor(){
		super();
		this.state={
			value:"nothing"
		}
	}
	changestate =() =>{
		this.setState({
			value:"something changed"
		})
	}
	render(){
		return(
			<div>
			<h1>{this.state.value} hello</h1>
			<button onClick ={this.changestate} > click it </button>
			</div>
			
			)
	}


}
export  default States;