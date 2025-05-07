import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Gift, Star } from "lucide-react";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import { getFeaturedProducts } from "../data/products";
import logo from "../assets/Tan_trove_logo.jpeg";

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      <Hero />

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Featured Products
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Discover our most loved handcrafted creations, each made with
              attention to detail and a touch of magic.
            </p>
          </motion.div>

          <ProductGrid products={featuredProducts} />

          <div className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/products"
                className="inline-flex items-center bg-transparent border border-pink-500 text-pink-500 px-6 py-3 rounded-md font-medium hover:bg-pink-500 hover:text-white transition-colors"
              >
                View All Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-500 mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Handcrafted with Love
              </h3>
              <p className="text-gray-600">
                Each item is lovingly made by hand, ensuring unique character
                and exceptional quality.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-500 mb-4">
                <Gift size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Perfect for Gifting
              </h3>
              <p className="text-gray-600">
                Surprise your loved ones with thoughtful, personalized gifts
                that create lasting memories.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-500 mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Customizable Designs
              </h3>
              <p className="text-gray-600">
                Many of our products can be personalized to make your gift even
                more special.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About The Tan Trove
              </h2>
              <p className="text-gray-600 mb-6">
                The Tan Trove is a passion project born from the love of
                creating handcrafted gifts that bring joy to people's lives. For
                over a year, we've been transforming simple materials into
                beautiful treasures.
              </p>
              <p className="text-gray-600 mb-6">
                Each piece we create tells a story of creativity, craftsmanship,
                and attention to detail. From our Hot Wheels bouquets to our
                resin phone cases, every item is made with care.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center bg-transparent border border-pink-500 text-pink-500 px-6 py-3 rounded-md font-medium hover:bg-pink-500 hover:text-white transition-colors"
                >
                  Learn More About Us
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={logo}
                alt="The Tan Trove"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-pink-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              See our latest creations, behind-the-scenes moments, and more on
              our Instagram.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://www.instagram.com/thetantrove"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-pink-500 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-600 transition-colors"
              >
                @thetantrove
                <ArrowRight size={18} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
