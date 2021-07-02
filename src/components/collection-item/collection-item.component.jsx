import React from 'react';

import {connect} from 'react-redux'; //items pushed here in the store are added to the cart-dropdown component

import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem=({item,addItem})=> {

const {name,price,imageUrl}=item;

return (

  <div className='collection-item'>
   <div
     className='image'
     style={{
         backgroundImage: `url(${imageUrl})`
  
     }}

     />
     <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
     </div>
     <CustomButton onClick={()=>addItem(item)} inverted>Add To Cart</CustomButton>
     </div>

)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)) //when calling addItem(item), the addItem action (in cart.actions.js) is called which return an object that is dispatched to Redux 
})

export default connect(null,mapDispatchToProps) (CollectionItem);