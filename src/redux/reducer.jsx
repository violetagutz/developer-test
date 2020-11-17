import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: ["car", "bike"],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === ADD_ITEM) {
    // add new item to current state
    state.wishList.push(action.payload);
  }
  return {
    wishList: state.wishList,
  };
};

export default reducer;
