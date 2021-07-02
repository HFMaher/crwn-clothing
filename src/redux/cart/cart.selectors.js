import { createSelector } from "reselect";

const selectCart=state =>state.cart; //input selector

export const selectCartItems = createSelector (
    [selectCart], //array of input selectors (udemmy 131)
    cart =>cart.cartItems
);

export const selectCartItemsCount=createSelector (
[selectCartItems],
cartItems =>
   cartItems.reduce (
     (accumalatedQuantity,cartItem) =>
        accumalatedQuantity +cartItem.quantity,
        0

   )

);