import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './Stripe';
import CheckoutForm from './CheckoutForm';

const PricingPlan = () => {
  return (
    <div className="pricing-container">
      <h2>Choose Your Plan</h2>
      <div className="pricing-plans">
        <div className="plan">
          <h3>Basic</h3>
          <p>$10/month</p>
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={1000} />
          </Elements>
        </div>
        <div className="plan">
          <h3>Standard</h3>
          <p>$20/month</p>
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={2000} />
          </Elements>
        </div>
        <div className="plan">
          <h3>Premium</h3>
          <p>$50/month</p>
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={5000} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
