import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ClassApp from './js/ClassApp';
import CreateApp from './js/CreateApp';
import FuncApp from './js/FuncApp';
import MoreProps from './js/MoreProps';




ReactDOM.render(
  <React.StrictMode>

    <ClassApp />
   
    <FuncApp />

    <CreateApp />

    <MoreProps {...MoreProps.props}/>

  </React.StrictMode>,
  document.getElementById('root')
);

