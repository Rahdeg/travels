import React from 'react';
import './App.css';
import About from './Components/About/about';
import Footer from './Components/Footer/footer';
import Home from './Components/Home/home';
import Passes from './Components/Passes/passes';
import Picture from './Components/Pictures/picture';
import Resort from './Components/Resorts/resort';
import 'tachyons'

function App() {
  return (
    <div className="">
    <Home/>
    <About/>
    <Picture/>
    <Resort/>
    <Passes/>
    <Footer/>
    </div>
  );
}

export default App;
