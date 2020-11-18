import {
  ADD_ITEM,
  DELETE_ITEM,
  DELETE_ALL_ITEMS,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case ADD_ITEM:
      // add new item to current state
      state.wishList.push(action.payload);

      return {
        wishList: state.wishList,
      }
      break;
    case DELETE_ITEM:
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
      break;
    case DELETE_ALL_ITEMS:
      return {
        wishList : [],
      }
      break;
    default:
      return {
        wishList: state.wishList,
      };
      break;
  };
};

export default reducer;
