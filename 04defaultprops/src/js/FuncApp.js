function FuncApp(props) {
    return(
        <div> {props.name} </div>
    )
}
FuncApp.defaultProps = {
    name: "张三"
}

export default FuncApp;