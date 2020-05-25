import React from 'react';
import './DetailedProduct.css';

function DetailedProduct(props) {
  if (Object.keys(props.showProduct).length !== 0) {
    return (
      <div className="details hide fade" id="details">
        <img
          src="https://image.flaticon.com/icons/svg/271/271203.svg"
          alt="close icon"
          onClick={props.closeDetails}
        ></img>
        <h1>{props.showProduct.name}</h1>
        <p>R$ {props.showProduct.price.toFixed(2)}</p>
        <p>{props.showProduct.description}</p>
        <div className="order">
          <button onClick={props.subtractOrder}>
            <img
              src="https://image.flaticon.com/icons/svg/254/254434.svg"
              alt=""
              className="rotated"
            ></img>
          </button>
          <p id="orderNum">0</p>
          <button onClick={props.addToOrder}>
            <img
              src="https://image.flaticon.com/icons/svg/254/254434.svg"
              alt=""
            ></img>
          </button>
        </div>
        <p id="throwError"></p>
        <button className="addToCart" onClick={props.addToCart}>
          Adicione ao carrinho
        </button>
      </div>
    );
  } else {
    return (
      <div className="details hide fade" id="details">
        <img
          src="https://image.flaticon.com/icons/svg/271/271203.svg"
          alt="close icon"
          onClick={props.closeDetails}
        ></img>
      </div>
    );
  }
}

export default DetailedProduct;
