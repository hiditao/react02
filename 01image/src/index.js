import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import dog from "./img/dog.jpg";

ReactDOM.render(
  <React.StrictMode>
    <img src={dog}/>
    <img src={require("./img/dog.jpg").default}/>
  </React.StrictMode>,
  document.getElementById('root')
);

