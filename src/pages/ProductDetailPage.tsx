import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = id ? getProductById(parseInt(id)) : undefined;
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-pink-500 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-600 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Reset quantity after adding to cart
    setQuantity(1);
  };
  
  return (
    <div className="pt-20">
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-pink-500 transition-colors mb-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain min-h-[400px]"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              <p className="text-2xl font-bold text-pink-500 mb-6">₹{product.price}</p>
              
              <div className="mb-6">
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <label htmlFor="quantity" className="text-gray-700 font-medium">
                  Quantity:
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="bg-gray-200 text-gray-700 h-10 w-10 flex items-center justify-center rounded-l-md hover:bg-gray-300 transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="h-10 w-16 border-t border-b border-gray-300 text-center focus:outline-none focus:ring-0"
                  />
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="bg-gray-200 text-gray-700 h-10 w-10 flex items-center justify-center rounded-r-md hover:bg-gray-300 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={handleAddToCart}
                  className="flex-1 bg-pink-500 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-600 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </motion.button>
                
                <motion.button
                  className="bg-gray-100 text-gray-700 h-12 w-12 rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart size={18} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <ProductGrid products={relatedProducts} title="You May Also Like" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;