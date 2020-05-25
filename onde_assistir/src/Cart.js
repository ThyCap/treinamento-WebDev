import React from 'react';

import './Cart.css';

function Cart(props) {
  const cartList = props.cart.map((product) => {
    return (
      <div className="cartItem" key={product.key}>
        <h1>{product.name}</h1>
        <p>Qtd. {product.size}</p>
        <p>
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
    return <h1 className="empty">Carrinho Vazio</h1>;
  } else {
    return (
      <div className="cartList" id="cartList">
        {cartList}
      </div>
    );
  }
}

export default Cart;
