
import { Routes, Route } from "react-router-dom"
import './App.css';
import './InsertDeleteList.css';
import InsertDeleteList from './InsertDeleteList';
import Product from "./product";
import 'bootstrap/dist/css/bootstrap.min.css'
import OrderConfirmation from './successpage';
import CartPage from './component/cart'
import SearchApp from "./component/search";

function App() {
  // const [products, setProducts] = useState([]);
  // const [productToEdit, setProductToEdit] = useState(null);

  // const addProduct = (product) => {
  //   setProducts([...products, product]);
  // };

  // const updateProduct = (product) => {
  //   const updatedProducts = products.map((p) => (p.sku === product.sku ? product : p));
  //   setProducts(updatedProducts);
  //   setProductToEdit(null);
  // };

  // const editProduct = (sku) => {
  //   const product = products.find((p) => p.sku === sku);
  //   setProductToEdit(product);
  // };

  // const cancelEdit = () => {
  //   setProductToEdit(null);
  // };

  // const deleteProduct = (sku) => {
  //   const updatedProducts = products.filter((product) => product.sku !== sku);
  //   setProducts(updatedProducts);
  // };
  return (
    <div className="App">
      
 
      <Routes>
        <Route path="/" element={ <Product/> } />
        <Route path="cart" element={ <CartPage/> } />
        <Route path="successpage" element={ <OrderConfirmation/> } />
        <Route path="insertdelete" element={ <InsertDeleteList/> } />
        <Route path="search" element={ <SearchApp/> } />
      </Routes>
     

      
    </div>
    
  );
  
}

export default App;
