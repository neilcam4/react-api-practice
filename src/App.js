import React, {Component}from 'react';
import './App.css';
import ConsumeLess from './ConsumeLess'
import Form from './Form'


class App extends Component{

constructor(props){
  super(props);
  this.state = {page:'about'};
}
changePage(newPage){
  this.setState({page:newPage})
}
renderPage(){
  if(this.state.page === 'form') return <Form />
  if(this.state.page === 'consumeLess') return <ConsumeLess />
}
render(){
  return (
    <div className="App">
      <nav>
        <a onClick={() => this.changePage('consumeLess')}>ConsumeLess</a>
        <a onClick={() => this.changePage('form')}>Form</a>
      </nav>
      {this.renderPage()}
      </div>
  );
  }
}
export default App;
