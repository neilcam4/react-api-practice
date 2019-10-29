import React, { Component} from 'react';
import axios from 'axios';

class ZenQuote extends Component {
    constructor(props){
        super(props);
        this.state = {quote: 'Carpe Diem'}
    }
    componentDidMount(){
        axios.get("https://api.github.com/zen")
        .then(response => {
            this.setState({quote: response.data})
        })
    }
    render(){
        return (<div><h1>Quote of the day is...</h1>
        <p>{this.state.quote}</p>
        </div>)
    }
}

export default ZenQuote