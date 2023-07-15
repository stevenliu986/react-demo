/* 
  类组件实例
    创建一个构造函数（类），必须继承React.Component/PureComponent这个类。
      使用ES6的class来创建类（相对于ES51来说比较方便）
      必须给当前类设置一个render方法（放在其原型上），在render方法中返回需要渲染的视图

  从调用类组件开始，类组件内部发生的事情
    1. 初始化属性 & 规则校验
      先规则校验，再处理属性的其他操作
      方案一：
        constructor(props) {
          super(props); // 会把传递进来的属性挂载到this实例上
          console.log(this.props); // 获取到传递的属性
        }
      方案二：即使不用constructor来处理，React内部也会把传递进来的props挂载到实例上。所以在其他的函数中，只要保证this是实例，
             就可以基于this.props获取传递进来的属性
        
*/
import PropTypes from "prop-types";
import React from "react";

class VoteClass extends React.Component {
  // 属性的规则校验
  static defaultProps = { num: 0 };
  static propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number,
  };

  render() {
    let { title } = this.props;
    return (
      <>
        <div>
          {title}
          <h2>投票的总人数为：15人</h2>
        </div>
        <div className="vote">
          <h2>支持的人数为：10人</h2>
          <h2>反对的人数为：5人</h2>
        </div>
        <button onClick={() => {}}>支持</button>
        <button onClick={() => {}}>反对</button>
      </>
    );
  }
}

export default VoteClass;
