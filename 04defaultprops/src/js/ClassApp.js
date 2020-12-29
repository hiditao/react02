import React, {Component} from "react";

class ClassApp extends Component {
    render() {
        return(
            <div>
                {this.props.id}
            </div>
        )
    }
}

ClassApp.defaultProps = {
    id: 101
}

export default ClassApp;