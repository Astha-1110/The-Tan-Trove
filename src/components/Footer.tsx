import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import logo from "../assets/Tan_trove_logo.jpeg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="The Tan Trove" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-600 mb-4">
              Handcrafted gifts and treasures made with love.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/thetantrove"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact@thetantrove.com"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Hot Wheels Bouquet
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Rose Bear Candles
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Glass Sippers
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Phone Cases
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Crochet Plushies
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail
                  size={18}
                  className="mr-2 text-pink-500 mt-1 flex-shrink-0"
                />
                <span className="text-gray-600">thetantrove@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Instagram
                  size={18}
                  className="mr-2 text-pink-500 mt-1 flex-shrink-0"
                />
                <a
                  href="https://www.instagram.com/thetantrove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  @thetantrove
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} The Tan Trove. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
