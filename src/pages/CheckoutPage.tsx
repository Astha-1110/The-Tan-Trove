import React from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import OrderForm from '../components/OrderForm';
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const { items } = useCart();
  
  // Redirect to cart if no items
  if (items.length === 0) {
    return <Navigate to="/cart" />;
  }
  
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-3xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Checkout
        </motion.h1>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <OrderForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;