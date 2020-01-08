import React from 'react';

import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = ({cartItems, total}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='checkout-block'>
        <span>Product</span>
      </div>
      <div className='checkout-block'>
        <span>Description</span>
      </div>
      <div className='checkout-block'>
        <span>Quantity</span>
      </div>
      <div className='checkout-block'>
        <span>Price</span>
      </div>
      <div className='checkout-block'>
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem}/>
    ))}

    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(Checkout);