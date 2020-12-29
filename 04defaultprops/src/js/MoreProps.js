function MoreProps(props) {
    console.log(props);
    return(
        <div>{props.id}--{props.name}--{props.sex}</div>
    )
}
// 定义多个属性,在使用组件时采用延展属性{...MoreProps.props}来使用这些属性
MoreProps.props = {
    id: 1,
    name: "小明",
    sex: "男",
    age: 18
}

export default MoreProps;