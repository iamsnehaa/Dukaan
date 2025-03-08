import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Shopcategory  from './pages/Shopcategory';
import { Product } from './pages/Product';
import { LoginSignup } from './pages/LoginSignup';
import {Shop} from './pages/Shop';
import {Cart} from './pages/Cart'
import { Footer } from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      < Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<Shopcategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productID' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
