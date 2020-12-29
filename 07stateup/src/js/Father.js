import React, {Component} from "react";
import One from "./One";
import Two from "./Two";


class Father extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 0
        };
    }
    change() {
        this.setState({
            num: this.state.num+1
        })
    }
    render() {
        return(
            <div>
                <button onClick={this.change.bind(this)}>改变数据</button>
                <One num1={this.state.num}/>
                <Two num2={this.state.num}/>
            </div>
        )
    }
}

export default Father;