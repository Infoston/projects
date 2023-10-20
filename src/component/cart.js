import React, { useState } from 'react';

import './cart.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 20,
      quantity: 2,
      image: 'https://4.bp.blogspot.com/-W-eso5sBUsU/WMckeUz4MlI/AAAAAAAAKLY/-PnBzGidZw87lrdDYkafWHJYeNZAyzE_ACLcB/s1600/open-bible-with-beautiful-sunset_rmXx3Wyfe0.jpg',
      color: 'Red',
      inStock: 5,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30,
      quantity: 1,
      image: 'https://th.bing.com/th/id/OIP.rKjVC6FBXcKXsc6-MChyugHaKR?w=195&h=270&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      color: 'Blue',
      inStock: 10,
    },
  ]);

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        item.quantity = newQuantity;
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const numItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>My Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Color</th>
                <th>In Stock</th>
                <th>Quantity</th>
                <th>Total Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.image} alt={item.name} height={100}width={100} /></td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.color}</td>
                  <td>{item.inStock}</td>
                  <td>
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    >
                      {[...Array(item.inStock).keys()].map((index) => (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>${item.quantity * item.price}</td>
                  <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Number of Items in Cart: {numItemsInCart}</p>
          <p>Total Cost: ${totalCost}</p>
         
        </div>
    
      )}
    </div>
  );
};

export default CartPage;
