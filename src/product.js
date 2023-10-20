// import React from 'react';
// import { useState } from 'react';
// import ProductForm from './productform';
// import { Link } from "react-router-dom";
// import ProductList from './productlist';
// function Product(){
// const [products, setProducts] = useState([]);
//   const [productToEdit, setProductToEdit] = useState(null);

//   const addProduct = (product) => {
//     setProducts([...products, product]);
//   };

//   const updateProduct = (product) => {
//     const updatedProducts = products.map((p) => (p.sku === product.sku ? product : p));
//     setProducts(updatedProducts);
//     setProductToEdit(null);
//   };

//   const editProduct = (sku) => {
//     const product = products.find((p) => p.sku === sku);
//     setProductToEdit(product);
//   };

//   const cancelEdit = () => {
//     setProductToEdit(null);
//   };

//   const deleteProduct = (sku) => {
//     const updatedProducts = products.filter((product) => product.sku !== sku);
//     setProducts(updatedProducts);
//   };
//   return (
//     <div>
//         <Link to=""></Link>
   
//       <Link to="successpage">Click to view our Success Page</Link><br/>
//       <Link to="cart">Click to view our Cart page</Link><br/>
//       <Link to="InsertDelete">Click to view our InsertDlete Sigle Product Page</Link><br/> 
//       <Link to="search">Click to view our Search bar</Link>
//     <h1>Product Management</h1>
//     <ProductForm
//       productToEdit={productToEdit}
//       onAddProduct={addProduct}
//       onUpdateProduct={updateProduct}
//       onCancelEdit={cancelEdit}
//     />
//     <ProductList products={products} onEditProduct={editProduct} onDeleteProduct={deleteProduct} />
//   </div>
//   );
// }
// export default Product;
import React, { useState } from 'react';
import ProductForm from './productform';
import { Link } from "react-router-dom";
import ProductList from './productlist';

function Product() {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('');

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
        
    //    return products.filter((product) => product.category.toLowerCase().includes((product.filterProducts.toLowerCase)));
     return products.filter((product) => product.category === categoryFilter);
    
    }
  };

  return (
    <div>
      <Link to=""></Link>

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
      />

      <div>
        <input
          type="text"
          placeholder="Search by Category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        />
        <button onClick={filterProducts}>Search</button>
     
      </div>

      <ProductList
        products={filterProducts()}
        onEditProduct={editProduct}
        onDeleteProduct={deleteProduct}
      />
    </div>
  );
}

export default Product;
