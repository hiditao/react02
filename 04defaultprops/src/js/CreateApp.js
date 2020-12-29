import CreateReactClass from "create-react-class";

export default CreateReactClass({
    getDefaultProps: function(){
        return {
            title: "我的标题"
        }
    },

    render(){
        return(
            <div> {this.props.title} </div>
        )
    }
})
