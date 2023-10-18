import React, { useState, useEffect } from 'react';

function ProductForm({ productToEdit, onAddProduct, onUpdateProduct }) {
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    category: '',
    summary: '',
    stock: 0,
    price: 0,
    description: '',
  });

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productToEdit) {
      onUpdateProduct(product);
    } else {
      onAddProduct(product);
    }
    setProduct({
      name: '',
      sku: '',
      category: '',
      summary: '',
      stock: 0,
      price: 0,
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" name="name" value={product.name} onChange={handleChange}  />
      </div>

      <div className="form-group">
        <label htmlFor="sku">SKU:</label>
        <input type="text" className="form-control" id="sku" name="sku" value={product.sku} onChange={handleChange}  />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input type="text" className="form-control" id="category" name="category" value={product.category} onChange={handleChange}  />
      </div>

      <div className="form-group">
        <label htmlFor="summary">Summary:</label>
        <input type="text" className="form-control" id="summary" name="summary" value={product.summary} onChange={handleChange}  />
      </div>


      <div className="form-group">
        <label htmlFor="stock">Stock:</label>
        <input type="number" className="form-control" id="stock" name="stock" value={product.stock} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input type="number" className="form-control" id="price" name="price" value={product.price} onChange={handleChange}  />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea className="form-control" id="description" name="description" value={product.description} onChange={handleChange}  />
      </div>

      <button type="submit" className="btn btn-success">{productToEdit ? 'Update Product' : 'Add Product'}</button>
    </form>
  );
}

export default ProductForm;
