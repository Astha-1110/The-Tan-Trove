import React from "react";
import { motion } from "framer-motion";
import { Heart, Gift, Star } from "lucide-react";
import logo from "../assets/Tan_trove_logo.jpeg";

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-pink-50 py-16 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Crafting memories and treasures with passion and love.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={logo}
                alt="The Tan Trove Logo"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </motion.div>

            <motion.div
              className="md:w-1/2 md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About The Tan Trove
              </h2>
              <p className="text-gray-600 mb-4">
                The Tan Trove is a passion-fueled crafting and gifting business
                that has been spreading joy through handcrafted treasures for
                over a year now. What started as a creative outlet has blossomed
                into a dedicated pursuit of creating unique, personalized gifts
                that capture special moments and emotions.
              </p>
              <p className="text-gray-600 mb-4">
                From our signature Hot Wheels bouquets that celebrate
                playfulness and nostalgia, to our delicate resin phone cases
                that preserve real flowers in time, each piece we create is
                infused with creativity, care, and attention to detail.
              </p>
              <p className="text-gray-600">
                We believe that gifts should be as unique as the people
                receiving them, which is why we put so much heart into our
                handcrafted creations. The joy on our customers' faces when they
                receive our products is what keeps us inspired to create more
                beautiful treasures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our commitment to quality and uniqueness sets us apart in
              everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-500 mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Handcrafted with Love
              </h3>
              <p className="text-gray-600">
                Each product is lovingly handmade, ensuring that no two items
                are exactly alike. We pour our hearts into every creation,
                focusing on quality craftsmanship and attention to detail.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-500 mb-6">
                <Gift size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Thoughtful Gifting
              </h3>
              <p className="text-gray-600">
                We believe in the power of meaningful gifts. That's why we
                create items that carry sentiment and thought, designed to make
                both the giver and receiver feel special.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-500 mb-6">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Personalized Touch
              </h3>
              <p className="text-gray-600">
                We offer customization options for many of our products,
                allowing you to create truly personalized gifts that reflect the
                recipient's personality and preferences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Meet The Creator
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                Behind The Tan Trove is a passionate creator with a vision to
                spread joy through handcrafted gifts. With an eye for detail and
                a heart full of creativity, each product is made with intention
                and care.
              </p>
              <p className="text-gray-600">
                "I believe that the most precious gifts are those made with love
                and thought. My goal is to create treasures that bring smiles to
                faces and warmth to hearts."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
