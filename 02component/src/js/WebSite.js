import React, {Component} from "react";

// 子组件
class Name extends Component {
    render() {
        return(<span>{this.props.name}</span>);
    }
}
class Link extends Component {
    render() {
        return(<span>{this.props.url}</span>);
    }
}

// 父组件
class WebSite extends Component {
    render() {
        return(
            <div>
                <Name name={this.props.wname}/>
                <Link url={this.props.wurl}/>
            </div>
        );
    }
}

export default WebSite;