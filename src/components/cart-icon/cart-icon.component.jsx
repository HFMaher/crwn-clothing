import React from 'react';

import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon=({toggleCartHidden,itemCount}) => (

 <div className='cart-icon' onClick={toggleCartHidden}>
 
 <ShoppingIcon className='shopping-icon' />
 <span className='item-count'>{itemCount}</span>
 </div>

);

const mapDispatchToProps=dispatch => ({
  toggleCartHidden: () =>dispatch(toggleCartHidden()) 
 
});

//const mapStateToProps=({cart: {cartItems}}) => { //this is called Selector because we are computing  new value based on a 
  
//console.log('I am being called'); //even though this function only cares about cartItems, what happens is everytime we change the state such as logging in/out, this function will be called Section 8(129)
//return {                          //the state always return a new object and this component will rerender everytime the state change
  //the solution is to use memoization and the reselect library
//itemCount:cartItems.reduce(
//  (accumalatedQuantity,cartItem) =>accumalatedQuantity + cartItem.quantity,0
//)
//};

//}; //to use reselect library, we need to move this function inside Redux folder 

const mapStateToProps=state => ({
itemCount: selectCartItemsCount(state)
});

export default connect (
  mapStateToProps,
  mapDispatchToProps

)(CartIcon);

