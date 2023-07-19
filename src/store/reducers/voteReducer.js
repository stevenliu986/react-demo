const initialState = {};
const voteReducer = (state = initialState, action) => {
  // 1. 先对state进行克隆
  state = { ...state };
  switch (action.type) {
    case "vote":
      break;
    case "delete":
      break;
    default:
      break;
  }
  return state;
};

export default voteReducer;
