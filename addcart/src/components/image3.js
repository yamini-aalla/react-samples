import React ,{Component} from'react';
class Third extends Component{
	state={
		show:false,
		data:'sneakers',
		datashow:false
	}
	display=()=>{
		this.setState({
			show:true
		})
	}
	adding=()=>{

		this.setState({
			data:'sneakers',
			datashow:true
	
		})
	}
	render(){
		return(<div>
			<img src={'sneakers.jpeg'} width ='300px' heigth='300px' />
			<p>Sneakers</p>
			<button onClick={this.display}>preview</button>
			{
				this.state.show?
				<pre>
				price-45$
				brand-nike
				reviews-****
				</pre>:null

			}
			<button onClick={this.adding}> Add to Cart</button>
			{
				this.state.datashow?
			<div id="cart2">{this.state.data}</div>:null
		}
			</div>)
	}
}
export default Third;