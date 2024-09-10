// CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PaymentForm.css'; // Reuse the same CSS file

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    // Call your backend to create a PaymentIntent
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    });

    const { clientSecret } = await response.json();

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: { name: 'Customer' },
      },
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      toast.error(error.message); // Show error toast
    } else if (paymentIntent.status === 'succeeded') {
      console.log('Payment successful!', paymentIntent);
      toast.success('Payment successful!'); // Show success toast
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="StripeElement" />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
