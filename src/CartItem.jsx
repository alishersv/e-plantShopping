import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';
import {handleContinueShopping} from './ProductList';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
        let cartTotal = 0;
        cart.forEach(item => {
            cartTotal += item.quantity * item.cost
        });
        return cartTotal;
  };

  const calculateNumberOfItems = () => {
        numberOfItems = 0;
        cart.forEach(item => {
            numberOfItems += item.quantity
        });
        return numberOfItems;
  }

  const handleContinueShopping = (e) => {
    handleContinueShopping(e);
  };

    const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
    };

  const handleIncrement = (item) => {
    dispatch(updateQuantity(item.quantity+1))
  };

  const handleDecrement = (item) => {
   if (item.quantity > 1) {
        dispatch(updateQuantity(item.quantity-1));
   } else {
        dispatch(removeItem(item));
   }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    itemTotalCost = item.quantity * item.cost;
    return itemTotalCost;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;

