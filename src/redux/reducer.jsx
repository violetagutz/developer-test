import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: ["car", "bike"],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  return {
    wishList: state.wishList,
  };
};

export default reducer;
