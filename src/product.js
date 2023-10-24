
import React, { useState } from 'react';
import ProductForm from './productform';
import { Link } from "react-router-dom";
import ProductList from './productlist';

function Product() {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('');
  

  const categories = ['Category A', 'Category B', 'Category C', 'Category D'];

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (product) => {
    const updatedProducts = products.map((p) => (p.sku === product.sku ? product : p));
    setProducts(updatedProducts);
    setProductToEdit(null);
  };

  const editProduct = (sku) => {
    const product = products.find((p) => p.sku === sku);
    setProductToEdit(product);
  };

  const cancelEdit = () => {
    setProductToEdit(null);
  };

  const deleteProduct = (sku) => {
    const updatedProducts = products.filter((product) => product.sku !== sku);
    setProducts(updatedProducts);
  };

  const filterProducts = () => {
    if (categoryFilter === '') {
      return products;
    } else {
      return products.filter((product) => product.category === categoryFilter);
    }
  };

  return (
    <div>
      <Link to=""></Link>
      <Link to="login">Login Page</Link><br/>
      <Link to="register">Registration</Link><br/>
      <Link to="successpage">Click to view our Success Page</Link><br />
      <Link to="cart">Click to view our Cart page</Link><br />
      <Link to="InsertDelete">Click to view our InsertDelete Single Product Page</Link><br />
      <Link to="search">Click to view our Search bar</Link>

      <h1>Product Management</h1>
      <ProductForm
        productToEdit={productToEdit}
        onAddProduct={addProduct}
        onUpdateProduct={updateProduct}
        onCancelEdit={cancelEdit}
        categories={categories} 
      />

      <div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={filterProducts}>Filter</button>
      </div>

      <ProductList
        products={filterProducts()}
        onEditProduct={editProduct}
        onDeleteProduct={deleteProduct}
        categoryFilter={categoryFilter}
      />
    </div>
  );
}

export default Product;
