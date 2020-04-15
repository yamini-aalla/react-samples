import React, { Component } from 'react';
import Second from './image2';
import Third from './image3';
import './image.css'
class First extends Component {
    state = {
        show: false,
        data: 'brown shoes',
        datashow: false
    }
    display = () => {
        this.setState({
            show: true
        })
    }
    adding = () => {

        this.setState({
            data: 'brown shoes',
            datashow: true

        })
    }
    render() {

            return ( < div > < img src = { "/shoes.jpeg" }
                    width = "300px"
                    heigth = "300px" / >
                    <
                    p > shoes brown color < /p> <
                    p id = "cart0" > Added to Cart < /p> <
                    button onClick = { this.display } > preview < /button> {
                    this.state.show ?
                    <
                    pre >
                    price - 15 $ brand - nike reviews - ** *
                    <
                    /pre>:null

                } <
                button onClick = { this.adding } > Add to Cart < /button> {
            this.state.datashow ?

                <
                div id = "cart" > { this.state.data } < /div>:null
        } <
        Second / >
        <
        Third / >

        <
        /div>)


}
}
export default First;