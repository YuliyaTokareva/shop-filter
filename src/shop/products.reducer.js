import { PRODUCTS_LIST_RECIEVED, SHOW_SPINNER } from './products.actions';

const initialState = {
  productsList: [],

  isFetching: false
};

const productsListReduser = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_RECIEVED:
      return {
        ...state,
        productsList: action.payload.productsList,

        isFetching: false
      };

    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true
      };
    }

    default:
      return state;
  }
};
export default productsListReduser;
