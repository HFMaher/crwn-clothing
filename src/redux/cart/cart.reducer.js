import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE={

hidden:true,
cartItems: []
};

const cartReducer=(state=INITIAL_STATE,action) => {
  
  switch (action.type) {
    
     case  CartActionTypes.TOGGLE_CART_HIDDEN:
         return {
          ...state,
          hidden: !state.hidden

         }

         case CartActionTypes.ADD_ITEM:
          return {
            ...state,
            cartItems: addItemToCart(state.cartItems,action.payload) //spreading cartItems array and any new action.payload will be added to the end
          };



         default:
             return state;
    

  }

};

export default cartReducer;