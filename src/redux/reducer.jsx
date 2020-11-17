import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === ADD_ITEM) {

    // add new item to current state
    state.wishList.push(action.payload);

  } else if (action.type === DELETE_ITEM) {
  // create new array
    // get one index of the array of an specific item is being clicked
    const indexOfItem = state.wishList.indexOf(action.payload)

    // use map to return a new array
    const listItems = state.wishList.map((item, index) => {
      if (index !== indexOfItem) {
        return item
      }
    });

    return {
      wishList: listItems,
    };

  }

  return {
    wishList: state.wishList,
  };
};

export default reducer;
