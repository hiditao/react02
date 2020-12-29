// egg中引入Controller
// import Controller extends "require('egg').Controller"


// // 类定义
// 写法1：
// import React from "react";
// class ClassApp extends React.Component {
//     render() {
//         return (
//             <div className="myclassapp">类定义的组件</div>
//         );
//     }
// }


// 写法2：
import React, {Component} from "react";
class ClassApp extends Component {
    render() {
        return(
            <div>类定义的组件</div>
        );
    }
}


export default ClassApp;

