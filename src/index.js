import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class Raja extends Component
{
  constructor(){
    super();
  }
render(){
  return(
    <div>
    <h1>hello raja</h1>
    <h2>hii </h2>
    </div>
  )
}
}
ReactDOM.render(<Raja/> ,document.getElementById("root"));