import React from 'react';

import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearGroupItems, addItem, removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, clearGroupItems, addItem, removeItem}) => {

  const {imageUrl, quantity, price, name} = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item'/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
      <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
    </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearGroupItems(cartItem)}>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearGroupItems: item => dispatch(clearGroupItems(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);