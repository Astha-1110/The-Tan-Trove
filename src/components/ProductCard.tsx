import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Product } from "../types";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  // Function to resolve the image source regardless of format
  const getImageSrc = (image: string | { [key: string]: any }) => {
    if (typeof image === "string") {
      return image;
    } else if (typeof image === "object" && image !== null) {
      // If it's an object like { hotWheels }, get the first value
      const imageValue = Object.values(image)[0];
      return imageValue;
    }
    // Fallback to a placeholder if needed
    return "https://via.placeholder.com/300";
  };

  return (
    <motion.div
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden"
      >
        <div className="h-64 overflow-hidden">
          <motion.img
            src={getImageSrc(product.image)}
            alt={product.name}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </div>
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
          <span className="text-pink-500 font-semibold">₹{product.price}</span>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-pink-500 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <Link
            to={`/product/${product.id}`}
            className="text-pink-500 text-sm font-medium hover:underline"
          >
            View Details
          </Link>
          <motion.button
            onClick={() => addToCart(product)}
            className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
