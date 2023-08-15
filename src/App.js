import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/MyNav';
import Cart from './Components/Cart';
import Products from './Components/Products';
import Home from './Pages/Home';
import MyFooter from './Components/MyFooter'; 
import Singleproduct from './Components/Singleproduct';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>

        <Route path='/Products' element={<Products/>}></Route>

        <Route path='/cart' element={<Cart/>}></Route>       
         <Route path="/Products/:id/:String"element={<Singleproduct/>} />


      </Routes>
      <MyFooter/>

    </div>
  );
}

export default App;