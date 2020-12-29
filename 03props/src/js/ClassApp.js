import React, {Component} from "react";

class ClassApp extends Component {
    // 当使用组件时,相当于new操作,构造函数会被执行
    // 构造函数中的this指向被创建出来的组件对象,也就是使用的那个组件
    constructor(props) {
        super(props);
        console.log(this);
        console.log(this.props.name, this.props.id);
    }
    render() {
        return(
            <div>
                {this.props.id}-----{this.props.name}
            </div>
        );
    }
}

export default ClassApp;