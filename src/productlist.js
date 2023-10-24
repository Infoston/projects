


import React from 'react';

function ProductList({ products, onEditProduct, onDeleteProduct, categoryFilter }) {
  const filteredProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products;

  return (
    <div className="row">
      {filteredProducts.map((product) => (
        <div key={product.sku} className="col-lg-3 col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">SKU: {product.sku}</p>
              <p className="card-text">Category: {product.category}</p>
              <p className="card-text">Summary: {product.summary}</p>
              <p className="card-text">Stock: {product.stock}</p>
              <p className="card-text">Price: {product.price}</p>
              <p className="card-text">Description: {product.description}</p>
              <button className="btn btn-primary" onClick={() => onEditProduct(product.sku)}>Edit</button>
              <button className="btn btn-danger ml-2" onClick={() => onDeleteProduct(product.sku)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
