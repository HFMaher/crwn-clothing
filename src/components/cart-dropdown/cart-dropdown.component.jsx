import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux'; //items are pushed to the store from the collection-item component

import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss';

const CartDropdown=({cartItems}) =>(

  <div className='cart-dropdown'>
  
   <div className='cart-items' >
   {cartItems.map(cartItem => (
     <CartItem key={CartItem.id} item={cartItem} />


   ))}
   
   </div>
   <CustomButton>GO TO CHECKOUT</CustomButton>
  
  </div>

);

//const mapStateToProps=({cart: {cartItems}}) => ({ //destructuring cart from root reducer, then destructuring cartItems, compare to header.component
//  cartItems
//});

const mapStateToProps=(state) => ({ //use selectors instead of the function above
cartItems: selectCartItems(state)  //cart.selectors.js
});

export default connect(mapStateToProps)(CartDropdown);