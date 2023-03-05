import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Ourstore from './pages/Ourstore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product' element={<Ourstore />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<SingleBlog />} />
            <Route path='/compare-product' element={<CompareProduct />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />
            <Route path='/shipping-policy' element={<ShippingPolicy />} />
            <Route path='/term-condition' element={<TermAndCondition />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
