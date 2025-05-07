import React from 'react';
import { motion } from 'framer-motion';
import { Map, Mail, Phone, Instagram } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Have questions or need help with a custom order? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <p className="text-gray-600 mb-8">
                We're here to answer any questions you might have about our products, custom orders, or anything else. Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-pink-100 text-pink-500 mr-4 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">contact@thetantrove.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-pink-100 text-pink-500 mr-4 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">+1234567890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-pink-100 text-pink-500 mr-4 flex-shrink-0">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Follow Us</h3>
                    <a 
                      href="https://www.instagram.com/thetantrove" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      @thetantrove
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-pink-100 text-pink-500 mr-4 flex-shrink-0">
                    <Map size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">
                      We're currently an online-only store, serving customers across the country.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Custom Orders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Looking for something special? We love creating custom pieces tailored to your preferences. 
              Contact us with your ideas, and we'll work together to create something unique just for you.
            </p>
            
            <a 
              href="mailto:contact@thetantrove.com" 
              className="bg-pink-500 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-600 transition-colors inline-flex items-center"
            >
              Request a Custom Order
              <Mail size={18} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;