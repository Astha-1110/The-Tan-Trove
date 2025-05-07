import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = Array.from(
    new Set(products.map(product => product.category))
  );
  
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;
  
  return (
    <div className="pt-20">
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
            <p className="text-lg text-gray-600">
              Browse our collection of handcrafted gifts and treasures, each made with love and care.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-md font-medium ${
                  selectedCategory === null
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Products
              </motion.button>
              
              {categories.map(category => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md font-medium capitalize ${
                    selectedCategory === category
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.replace('-', ' ')}
                </motion.button>
              ))}
            </div>
          </div>
          
          <ProductGrid 
            products={filteredProducts} 
            title={selectedCategory 
              ? `${selectedCategory.replace('-', ' ').charAt(0).toUpperCase() + selectedCategory.replace('-', ' ').slice(1)}` 
              : undefined
            } 
          />
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;