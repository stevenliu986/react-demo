// 创建redux的公共容器
import { createStore } from "redux";

let initialState = { supNum: 10, oppNum: 5 };
// 创建reducer，来修改store容器中的公共状态
const reducer = (state = initialState, action) => {
  // state: 存储store容器中的公共状态，初始值是initialState
  // action: 每一次基于dispatch派发的时候，传递进来的行为对象(要求必须具备type属性，存储派发的行为标识)
  // 为了接下来的操作中， 我们操作state,不会直接修改容器中的状态（要等到最后return的时候），需要先克隆
  state = { ...state };
  // 接下来需要基于派发的行为标识，修改store中的公共状态信息
  switch (action.type) {
    case "VOTE_SUP":
      state.supNum++;
      break;
    case "VOTE_OPP":
      state.oppNum++;
      break;
    default:
      break;
  }
  // return的内容，会整体替换store容器中的状态信息
  return state;
};

// 创建store公共容器
const store = createStore(reducer);
export default store;
