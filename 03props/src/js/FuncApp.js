// 函数组件内部没有this,如果要使用组件传递的属性,那么必须给定一个参数
function FuncApp(props) {
    console.log(this, props)
    console.log(props.id);
    return(
        <div>{props.id} --- {props.type}</div>
    );
}

export default FuncApp;