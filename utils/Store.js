import { createContext, useReducer } from 'react';

export const Store = createContext();

//setting default item as empty cart
const initialState = {
  cart: { cartItems: [] },
};

//adding new item to the cart
function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );

      //check item in the cart if it is exist add/replace newitem
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : // update the cart item by quantity if it is exist
          [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}
//fetching items from children property
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}

//pass this page to the app.js
//pass this page to the layout.js
