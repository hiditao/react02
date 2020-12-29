
// 使用第三方模块创建组件
// 需要先下载模块  cnpm i create-react-class --save
import CreateReactClass from "create-react-class";

const CreateClass = CreateReactClass({
    render() {
        return (<div>使用模块创建组件</div>);
    }
});

export default CreateClass;