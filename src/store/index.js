// 创建redux的公式容器
import { createStore } from "redux";

let initialState = { supNum: 10, oppNum: 5 };
// 创建reducer，来修改store容器中的公共状态
const reducer = (state = initialState, action) => {
  // state: 存储store容器中的公共状态，初始值是initialState
  // action: 每一次基于dispatcher派发的时候，传递进来的行为对象
};

// 创建store公共容器
const store = createStore(reducer);
