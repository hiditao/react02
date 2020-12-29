import PropTypes from "prop-types";

function MyApp(props) {
    return (
        <div> 
            <h1> {props.id} </h1> 
            <h2>{props.a} * {props.b} = {props.a*props.b}</h2>
            {props.flag ? <a href="http://www.baidu.com">百度</a> : <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2296051678,3134041535&fm=26&gp=0.jpg"/>}
            <ul>
                {props.arr.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}
MyApp.propTypes = {
    a: PropTypes.number,
    b: PropTypes.number,
    cb: PropTypes.func,
    flag: PropTypes.bool,
    arr: PropTypes.array
}

export default MyApp;

