export const addItemToCart=(cartItems,cartItemToAdd) => {

 const existingCartItem=cartItems.find(
  cartItem =>cartItem.id===cartItemToAdd.id
 );

 if (existingCartItem) {

   return cartItems.map(cartItem =>  //return a new array so that it is captured by React change detection
    cartItem.id===cartItemToAdd.id
    ? {...cartItem,quantity:cartItem.quantity+1}
    :cartItem
     
    
    );

 }

return [...cartItems,{...cartItemToAdd,quantity:1}] //return a new array (if it is a new item)


};