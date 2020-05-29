import React, { Component } from 'react';
import './App.css';

import Products from './Products.js';
import DetailedProduct from './DetailedProduct.js';
import Nav from './Nav.js';

import list from './productsList.json';

class App extends Component {
  state = {
    products: list.products,
    showProduct: {},
    cart: [],
  };

  showMoreDetails = (e) => {
    if (Object.keys(this.state.showProduct).length === 0) {
      let boxName = e.currentTarget.getAttribute('id').slice(4);

      document.getElementById('details').classList.remove('hide');
      document.getElementById('products').classList.toggle('fade');
      document.getElementById('header').classList.toggle('fade');
      document.getElementById('bg').classList.toggle('hide');

      let [selected] = this.state.products.filter(
        (product) => product.name === boxName
      );

      this.setState((prevState) => ({
        ...prevState,
        showProduct: selected,
      }));
    }
  };

  closeDetails = (e) => {
    if (this.state.showProduct.length !== 0) {
      document.getElementById('details').classList.add('hide');
      document.getElementById('products').classList.toggle('fade');
      document.getElementById('header').classList.toggle('fade');
      document.getElementById('bg').classList.toggle('hide');

      this.setState((prevState) => ({
        ...prevState,
        showProduct: {},
      }));
    }
  };

  normalize() {
    let myKey = 1;
    let myProds = [...this.state.products];

    myProds.forEach((prod) => {
      prod.key = myKey;

      myKey += 1;
    });

    this.setState((prevState) => ({
      ...prevState,
      products: myProds,
    }));
  }

  addToOrder = (e) => {
    let num = document.getElementById('orderNum').innerHTML * 1;
    document.getElementById('orderNum').innerHTML = num + 1;
  };

  subtractOrder = (e) => {
    if (document.getElementById('orderNum').innerHTML !== '0') {
      let num = document.getElementById('orderNum').innerHTML * 1;
      document.getElementById('orderNum').innerHTML = num - 1;
    }
  };

  addToCart = (e) => {
    let orderNum = document.getElementById('orderNum').innerHTML * 1;
    const errorMsg = document.getElementById('throwError');

    // Testes
    // numero dif de 0
    // key não está presente --> se estiver, adicionar ao numero
    // estoque (not now)
    //

    if (orderNum === 0) {
      errorMsg.innerHTML = 'Não é possível um pedido de 0 itens!';
      errorMsg.style.color = 'red';
    } else {
      errorMsg.innerHTML = '';

      let cartList = [...this.state.cart];
      const currentOrder = { ...this.state.showProduct };

      // Segundo teste: se o pedido já está no carrinho
      const orderKey = currentOrder.key;
      const test = cartList.some((order) => order.key === orderKey);

      if (test) {
        errorMsg.innerHTML = 'Número adicionado ao pedido atual';
        errorMsg.style.color = 'green';

        cartList.forEach((order) => {
          if (order.key === currentOrder.key) {
            order.size += orderNum;
          }
        });
      } else {
        errorMsg.innerHTML = 'Pedido adicionado ao carrinho!';
        errorMsg.style.color = 'green';

        cartList.push({
          name: this.state.showProduct.name,
          key: this.state.showProduct.key,
          price: this.state.showProduct.price,
          size: orderNum,
        });
      }

      this.setState((prevState) => ({
        ...prevState,
        cart: cartList,
      }));
    }
  };

  deleteFromCart = (e) => {
    let prodId = e.target.getAttribute('id').slice(3) * 1;
    let newCart = [...this.state.cart].filter((prod) => prod.key !== prodId);

    this.setState((prevState) => ({
      ...prevState,
      cart: newCart,
    }));
  };

  emptyCart = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      cart: [],
    }));
  };

  render() {
    return (
      <div className="App">
        <Nav cart={this.state.cart} deleteFromCart={this.deleteFromCart} />
        <div
          className="background hide"
          id="bg"
          onClick={this.closeDetails}
        ></div>
        <Products
          productList={this.state.products}
          showProduct={this.state.showProduct}
          moreDetails={this.showMoreDetails}
          closeDetails={this.closeDetails}
        />
        <DetailedProduct
          showProduct={this.state.showProduct}
          cart={this.state.cart}
          moreDetails={this.showMoreDetails}
          closeDetails={this.closeDetails}
          addToOrder={this.addToOrder}
          subtractOrder={this.subtractOrder}
          addToCart={this.addToCart}
        />
      </div>
    );
  }

  componentDidMount() {
    this.normalize();
  }
}

export default App;
