import React, { useState, useEffect } from 'react';
function ProductForm({ productToEdit, onAddProduct, onUpdateProduct, onCancelEdit, categories }) {
  const [product, setProduct] = useState({
    sku: '',
    name: '',
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
      sku: '',
      name: '',
      category: '',   
      summary: '',
      stock: 0,
      price: 0,
      description: '',
    });
  };

  return (
    <div>
      <h2>{productToEdit ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>SKU:</label>
          <input type="text" name="sku" value={product.sku} onChange={handleChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </div>
        <div>
          <label>Category:</label>
          <select name="category" value={product.category} onChange={handleChange}>
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Summary:</label>
          <input type="text" name="summary" value={product.summary} onChange={handleChange} />
        </div>
        <div>
          <label>Stock:</label>
          <input type="number" name="stock" value={product.stock} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={product.description} onChange={handleChange} />
        </div>
        <button type="submit">{productToEdit ? 'Update' : 'Add'}</button>
        {productToEdit && <button type="button" onClick={onCancelEdit}>Cancel</button>}
      </form>
    </div>
  );
}

export default ProductForm;
