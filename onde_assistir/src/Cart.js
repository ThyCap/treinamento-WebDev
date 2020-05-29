import React from 'react';

import './Cart.css';

function Cart(props) {
  const cartList = props.cart.map((product) => {
    return (
      <div className="cartItem" key={product.key}>
        <p className="cartItem__name" style={{ fontWeight: 'bold' }}>
          {product.name}
        </p>
        <p className="cartItem__qty">Qtd. {product.size}</p>
        <p className="cartItem__price">
          Total: R$ {(product.size * product.price).toFixed(2)}
        </p>
        <p className="cartItem__delete">
          <ion-icon
            name="trash-outline"
            id={'rm-' + product.key}
            onClick={props.deleteFromCart}
          ></ion-icon>
        </p>
      </div>
    );
  });

  if (cartList.length === 0) {
    return (
      <div className="cartList" id="cartList">
        <h1 className="empty">Carrinho Vazio</h1>
      </div>
    );
  } else {
    return (
      <div className="cartList" id="cartList">
        {cartList}
      </div>
    );
  }
}

export default Cart;
