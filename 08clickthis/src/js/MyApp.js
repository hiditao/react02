import React from "react";

class MyApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 0
        }

        // 方法1: 在构造函数内部改变this指向
        this.one = this.one.bind(this);
    }

    // 事件函数内部this会丢失,所以需要更改this的指向,指向MyApp实例
    one() {
        console.log(this);

        this.setState({
            num: this.state.num + 1
        })
    }

    two(n) {
        // console.log(arguments);
        // console.log(args);
        this.setState({
            num: n
        })
    }

    // 3. 箭头函数还处于实验性阶段,可能会废弃
    three = () => {
        this.setState({
            num: this.state.num - 1
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.one}>构造函数内部来改变this---{this.state.num}</button>
                {/* 方法2: 直接bind this,这种方式可以传递0~多个参数 */}
                <button onClick={this.two.bind(this, 100)}>直接bind改变----{this.state.num}</button>
                <button onClick={this.three}>箭头函数改变----{this.state.num}</button>
                {/* 4. 直接使用箭头函数作为事件处理函数,缺点是js代码与结构混合在一起 */}
                <button onClick={() => {
                    this.setState({
                        num: this.state.num*2
                    })
                }}>箭头函数----{this.state.num}</button>
            </div>
        )
    }
}

export default MyApp;