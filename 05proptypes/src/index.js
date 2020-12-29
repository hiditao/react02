import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from "./js/MyApp";


let a = 10;
let b = 20;
let fn = () => {

};
let flag = true;
let arr = [1,2,3,4,5];
let list = [
  {
    id: 1,
    value: ""
  },
  {
    id: 2,
    value: ""
  }
]

ReactDOM.render(
  <React.StrictMode>
    <MyApp id="100" a={a} b={b} cb={fn} flag={flag} arr={arr}/>
   
  </React.StrictMode>,
  document.getElementById('root')
);

