import { Fragment } from 'react';

import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';
import Cars from './components/pages/Cars';
import Contact from './components/pages/contact';
import Testimonails from './components/pages/testimonails';
import Footer from './components/pages/Footer';
import MainNagivation from './components/MainNavigation';
import CartProvider from './store/CartProvider'
import Sponsers from './components/pages/Sponsers';
function App(props) {
  return <CartProvider>
      <MainNagivation />
      <Home />
      <About />
      <Service />
      <Cars/>
      <Contact />
      <Testimonails />
      <Sponsers />
      <Footer />
</CartProvider>
  
}

export default App;
