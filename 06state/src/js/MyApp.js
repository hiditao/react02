import React from "react";

class MyApp extends React.Component {
    constructor(props) {
        super(props);

        // 定义状态: 在构造函数中
        this.state = {
            flag: true,
            num: 0
        }
    }

    // 事件处理函数
    handleClick() {
        // 更改状态: 在事件函数内部
        this.setState({
            flag: !this.state.flag,
            num: this.state.num+1
        })
    }

    render() {
        let red = {
            width: 100,
            height: 100,
            backgroundColor: "red"
        };
        let blue = {
            width: 200,
            height: 200,
            backgroundColor: "blue"
        }

        console.log(this.state.num)

        return(
            <div>
                <h1 onClick={this.handleClick.bind(this)}>
                    {/* 使用状态: 在render函数中使用 */}
                    {this.state.flag ? "你好" : "hello"}
                </h1>
                <div style={this.state.num%2 === 0 ? red : blue}>{this.state.num}</div>
            </div>
        );
    }
}

export default MyApp;