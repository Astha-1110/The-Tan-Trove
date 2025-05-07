import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import floralImage from "../assets/floral_resin_phone-case.jpeg";
import glassSipper from "../assets/personalized_glass_sipper.jpeg";
import bearCandles from "../assets/Bear_candles.png";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-pink-50 flex items-center overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 right-[5%] h-24 w-24 rounded-full bg-pink-200 opacity-40"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[10%] h-16 w-16 rounded-full bg-pink-300 opacity-50"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 left-[20%] h-12 w-12 rounded-full bg-pink-400 opacity-30"
        animate={{
          y: [0, 15, 0],
          x: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Handcrafted Gifts <br />
              <span className="text-pink-500">Made With Love</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Discover unique handcrafted treasures that bring joy and warmth to
              your loved ones. Every piece tells a story of creativity and
              passion.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center bg-pink-500 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-600 transition-colors"
                >
                  Shop Now
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center bg-transparent border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:border-pink-500 hover:text-pink-500 transition-colors"
                >
                  Our Story
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative h-[500px] w-full">
              <motion.img
                src={floralImage}
                alt="Floral Resin Phone Case"
                className="absolute h-64 w-auto rounded-lg shadow-lg z-20 top-0 left-[10%]"
                initial={{ rotate: -5 }}
                animate={{ rotate: [-5, 0, -5] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={bearCandles}
                alt="Rose Bear Candles"
                className="absolute h-56 w-auto rounded-lg shadow-lg z-10 bottom-[10%] left-[5%]"
                initial={{ rotate: 5 }}
                animate={{ rotate: [5, 0, 5] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.img
                src={glassSipper}
                alt="Personalized Glass Sipper"
                className="absolute h-72 w-auto rounded-lg shadow-lg z-30 right-[15%] top-[15%]"
                initial={{ rotate: 3 }}
                animate={{ rotate: [3, -2, 3] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
