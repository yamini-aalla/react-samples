import React ,{Component} from 'react';


class Second extends Component{
	state={
		show:false,
		data:'brown shoes',
		datashow:false
	}
	display=()=>{
		this.setState({
			show:true
		})
	}
	adding=()=>{

		this.setState({
			data:'fancy shoes',
			datashow:true
	
		})
	}
	render(){
		return(<div>
			<img src={'fancy.jpg'} width ='300px' heigth='300px' />
			<p>Fancy Shoes</p>
			<button onClick={this.display}>preview</button>
			{
				this.state.show?
				<pre>
				price-25$
				brand-nike
				reviews-**
				</pre>:null

			}
			<button onClick={this.adding}> Add to Cart</button>
			{
				this.state.datashow?
			<div id="cart1">{this.state.data}</div>:null
		}
			</div>)
	}
}
export default Second;