import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from "./components/Checkout";
import Login from "./components/Login"
import {  Routes, Route,BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/checkout" element={<><Header/> <Checkout/></>}/>
          <Route path="/" element={<><Header/> <Home/></>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
