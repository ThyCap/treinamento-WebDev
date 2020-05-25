import React from 'react';
import './Products.css';

function Products(props) {
  const { productList, moreDetails } = props;

  const finalList = productList.map((product) => {
    return (
      <div className="item" key={product.key}>
        <h1>{product.name}</h1>
        <p>R$ {product.price.toFixed(2)}</p>
        <button onClick={moreDetails} id={`btn-${product.name}`}>
          Mais Detalhes
        </button>
      </div>
    );
  });

  return (
    <div className="products" id="products">
      <h1> Meus produtos aqui</h1>
      <div className="list">{finalList}</div>
    </div>
  );
}

export default Products;
