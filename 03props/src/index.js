import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ClassApp from './js/ClassApp';
import CreateApp from './js/CreateApp';
import FuncApp from './js/FuncApp';



ReactDOM.render(
  <React.StrictMode>
    {/* 类组件 */}
    <ClassApp name="类组件" id="100"/>

    {/* 函数组件 */}
    <FuncApp id="1" type="函数"/>

    {/* create-react-class创建的组件 */}
    <CreateApp name="create组件"/>
   
  </React.StrictMode>,
  document.getElementById('root')
);

