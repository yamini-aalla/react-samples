import React ,{Component} from 'react';
class Count extends Component{
	constructor(){
		super();
		this.state={
			count :0
		}
	}
	changecount =() =>{
		this.setState({
			count :this.state.count+1
		})
	}
	render(){
		return (
			<div>
			<h1> count-{this.state.count}</h1>
			<button onClick ={this.changecount}>countcheck
			</button>

			</div>
			)
	}
}
export default Count;