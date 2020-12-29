import CreateReactClass from "create-react-class";

const CreateApp = CreateReactClass({
    render() {
        console.log(this)
        return(<div>{this.props.name}</div>)
    }
});

export default CreateApp;