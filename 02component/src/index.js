import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ClassApp from './js/ClassApp';
import CreateClass from './js/CreateClass';
import FuncApp from './js/FuncApp';
import WebSite from './js/WebSite';


ReactDOM.render(
  <React.StrictMode>
    <ClassApp />
    <FuncApp />
    <CreateClass />
    <WebSite wname="百度" wurl="http://www.baidu.com"/>
    <WebSite wname="新浪" wurl="http://www.sina.com"/>
  </React.StrictMode>,
  document.getElementById('root')
);

