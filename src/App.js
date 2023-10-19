import { useState } from 'react';
import './App.css';
import './InsertDeleteList.css';
import InsertDeleteList from './InsertDeleteList';
import ProductForm from './productform';
import ProductList from './productlist';
import 'bootstrap/dist/css/bootstrap.min.css'
import OrderConfirmation from './successpage';
import './successpage'

function App() {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

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
  return (
    <div className="App">
  <InsertDeleteList/>
  <div>
      <h1>Product Management</h1>
      <ProductForm
        productToEdit={productToEdit}
        onAddProduct={addProduct}
        onUpdateProduct={updateProduct}
        onCancelEdit={cancelEdit}
      />
      <ProductList products={products} onEditProduct={editProduct} onDeleteProduct={deleteProduct} />
    </div>
    </div>
    
  );
  return (
   
    <div>
     <OrderConfirmation/>
     
    </div>
 
);
}

export default App;
