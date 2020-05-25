import React, { Component } from 'react';

import Cart from './Cart.js';
import Login from './Login.js';

import './Nav.css';

class Nav extends Component {
  showCart = (e) => {
    document.getElementById('cart').classList.toggle('hide');
    document.getElementById('login').classList.add('hide');
    document.getElementById('loginForm').classList.add('hide');
    document.getElementById('bg-nav').classList.remove('hide');

    if (this.props.cart.length !== 0) {
      document.getElementById('cartList').scrollTop = 0;
    }
  };

  showLogin = (e) => {
    document.getElementById('loginError').innerHTML = '';
    document.getElementById('login').classList.toggle('hide');
    document.getElementById('loginForm').classList.toggle('hide');
    document.getElementById('cart').classList.add('hide');
    document.getElementById('bg-nav').classList.toggle('hide');
  };

  closePopUps = (e) => {
    document.getElementById('cart').classList.add('hide');
    document.getElementById('login').classList.add('hide');
    document.getElementById('loginForm').classList.add('hide');
    document.getElementById('bg-nav').classList.toggle('hide');
  };

  render() {
    return (
      <div id="header">
        <div
          className="bg-nav hide"
          id="bg-nav"
          onClick={this.closePopUps}
        ></div>
        <div className="logo">
          <img
            src="https://image.flaticon.com/icons/svg/2922/2922778.svg"
            alt="logo"
          />
          <p>ReAmazon</p>
        </div>
        <ul>
          <li onClick={this.showCart}>Carrinho</li>
          <li onClick={this.showLogin}>Login</li>
        </ul>
        <div className="popup hide" id="cart">
          <Cart
            cart={this.props.cart}
            deleteFromCart={this.props.deleteFromCart}
          />
        </div>
        <div className="popup hide" id="login">
          <Login />
        </div>
      </div>
    );
  }
}

export default Nav;
