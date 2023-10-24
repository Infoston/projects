
import { Routes, Route } from "react-router-dom"
import './App.css';
import './InsertDeleteList.css';
import InsertDeleteList from './InsertDeleteList';
import Product from "./product";
import 'bootstrap/dist/css/bootstrap.min.css'
import OrderConfirmation from './successpage';
import CartPage from './component/cart'
import SearchApp from "./component/search";
import Login from "./component/login";
import Registration from "./component/register";

function App() {
  
  return (
    <div className="App">
      
 
      <Routes>
        <Route path="/" element={ <Product/> } />
        <Route path="cart" element={ <CartPage/> } />
        <Route path="successpage" element={ <OrderConfirmation/> } />
        <Route path="insertdelete" element={ <InsertDeleteList/> } />
        <Route path="search" element={ <SearchApp/> } />
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Registration/>}/>
      </Routes>
     

      
    </div>
    
  );
  
}

export default App;
