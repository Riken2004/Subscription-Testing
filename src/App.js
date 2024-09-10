// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './Stripe'; // Import the stripePromise
import HomePage from './routes/HomePage.jsx';
import AboutPage from './routes/AboutPage.jsx';
import NavigationBar from './NavigationBar.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import PricingPlan from './PricingPlan.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='pricing' element={<PricingPlan />} />
        </Routes>
      </Elements>
      <ToastContainer />
    </div>
  );
}

export default App;
