import React, {Component} from 'react'
import axios from 'axios'

class ConsumeLess extends Component {
    constructor(props){
        super(props);
        this.state = {data: 'The first item to borrow'}
    }
    componentDidMount(){
        axios.get("https://api.github.com/zen")
        .then(response => {
            this.setState({data: response.data})
        })
    }
    render(){
        return (
            <div><h1>ConsumeLess</h1>
            <p>Today's items are..</p>
            <p>{this.state.data}</p>
            </div>
        )
    }
}
export default ConsumeLess
