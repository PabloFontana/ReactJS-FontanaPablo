import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { getFirestore, getDoc , doc } from 'firebase/firestore';

import './App.css'; 
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from "./components/NavBar" ;
import { Provider } from './contexts/CartContext';
import { Cart } from './components/Cart/Cart';
import { useEffect } from 'react';

function App() {

  //doc
  useEffect

  return (
  <><Provider>
  <BrowserRouter>
  <NavBar /> 
  <Routes>
    <Route path="/" element={<ItemListContainer/> }/>
    <Route path="/category/:id" element={<ItemListContainer/> }/>
    <Route path="/item/:id" element={<ItemDetailContainer/> }/>
    <Route path="/cart" element={<Cart/> }/>
    <Route path='*' element={ <h1> 404 NOT FOUND</h1>} />
  </Routes>
  </BrowserRouter>
  </Provider>
  </>
  );
}

export default App
 