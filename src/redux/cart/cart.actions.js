import CartActionTypes from './cart.types';

export const toggleCartHidden=() => ({

  type:CartActionTypes.TOGGLE_CART_HIDDEN

});

export const addItem=item => ({  //return an action (object) which is passed to the reducer

type:CartActionTypes.ADD_ITEM,
payload: item


});