// const {createStore} = require('redux');

const { createStore, combineReducers } = require("redux");

// // defining constent
// const INCREMENT = "INCREMENT";
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
// const RESET = "RESET";
// const DECREMENT = "DECREMENT";
// const ADD_USER = "ADD_USER";

// // state
// const intialCountState = {
//     users: ["sabbir"],
//     count: 0
// }
// const intialUserState = {
//     users: [
//         { name: 'sabbir', }
//     ]
// }

// // actin - Object - 2 importent things - type and payload
// // payload for data transfer
// // INCREMENT COUNTER
// // DECREMENT COUNTER

// const incrementCounterAction = () => {
//     return{
//         type: INCREMENT,
//     };
// }
// const decrementCounterAction = () => {
//     return{
//         type: DECREMENT,
//     };
// }
// const addUserAction = () => {
//     return{
//         type: ADD_USER,
//         payload: {name: 'moon'}
//     };
// }

// const restCounterAction = () => {
//     return {
//         type: RESET,
//     }
// }
// const incrementCounterByValue = (value) => {
//     return {
//         type: INCREMENT_BY_VALUE,
//         payload: value
//     }
// }

// // create reducer for counter
// const counterReducer = (state = intialCountState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1,
//             }

//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1,
//             }
//         case RESET:
//             return {
//                 ...state,
//                 count: 0,
//             }
//         case INCREMENT_BY_VALUE:
//             return {
//                 ...state,
//                 count: state.count + action.payload,
//             }

//         default:
//             state;
//     }
// }

// // 1. state
// // 2. dispatch action
// // 3. reducer work based on action type
// // 4. store, store have 3 important methods 1- getState() 2- dispatch() 3- subscribe()

// // create store
// const store = createStore(counterReducer);
// store.subscribe(() => {
//     console.log(store.getState())
// })

// dispatch action
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(incrementCounterByValue(5));
// store.dispatch(incrementCounterByValue(10));
// store.dispatch(incrementCounterByValue(15));

// VIDEO 7

// products constant
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// cart constant
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// product states
const intialProductState = {
  product: ["sabbir", "shohag"],
  numberOfProduct: 2,
};
// cart states
const intialCartState = {
  cart: ["bike"],
  numberOfProduct: 1,
};

// product actions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
// cart actions
const getCarts = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCart = (cart) => {
  return {
    type: ADD_CART_ITEM,
    payload: cart,
  };
};

// productReducer
const productReducer = (state = intialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.product, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };

    default:
      return state;
  }
};

// cartReducer
const cartReducer = (state = intialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEM:
      return {
        carts: [...state.cart, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };

    default:
      return state;
  }
};

// root reducer
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// store for products
// const store = createStore(productReducer);
// store.subscribe(() => {
//     console.log(store.getState())
// })

// store for carts
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// product show
// store.dispatch(getProducts())
// store.dispatch(addProduct("moon"))

// cart show
store.dispatch(getCarts());
store.dispatch(addCart("car"));
