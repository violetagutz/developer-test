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

      state.wishList.push(action.payload);
      return {
        wishList: state.wishList,
      }

    case DELETE_ITEM:

      const indexOfItem = state.wishList.indexOf(action.payload)
      const listItems = state.wishList.map((item, index) => {
        if (index !== indexOfItem) {
          return item
        }
      });

      return {
        wishList: listItems,
      };

    case DELETE_ALL_ITEMS:
      return {
        wishList : [],
      }

    default:
      return {
        wishList: state.wishList,
      };
  };
};

export default reducer;
