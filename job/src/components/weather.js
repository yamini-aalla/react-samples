import React,{Component} from 'react';
import axios from 'axios';
class Weather extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
        this.inputRef = React.createRef(); 
    }

    onHandleSubmit = (e) => {
        e.preventDefault()
        console.log('in submit')
        let zipcode = this.inputRef.current.value;

        axios.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=6adb0f716ff7fb53d89de609621f9f6c`)
        .then(res => {
            console.log(res.data)
            this.setState({
                data: res.data
            }) 
        })
    }

    // componentDidMount(){
    //      let zipcode = this.state.value;

    //     axios
    //     .get(
    //         `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=6adb0f716ff7fb53d89de609621f9f6c`
    //         )
    //     .then(res =>{
    //         console.log(res.data);
    //     })
    //     .catch(error =>{
    //         console.log(error);
    //     })
    
    // }
    render(){
        console.log(this.state);
        return(
                <form onSubmit={this.onHandleSubmit} >
                    ZipCode: <input type="text" ref={this.inputRef} />
                    <button >Submit</button>
                    <h2>Location: {this.state.data ? this.state.data.name: null}</h2>
                    <h2>Temperature: {this.state.data ? this.state.data.main.temp: null}</h2>
                </form>
        )
    }
}
export default Weather;