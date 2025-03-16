import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Microscope, Book, Cuboid as Cube } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Microscope className="h-8 w-8 text-red-600" />
              <span className="text-2xl sm:text-sm font-bold text-gray-900">
                EduAR
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/models"
              className="flex items-center space-x-2 text-gray-700 hover:text-red-600"
            >
              <Cube className="h-5 w-5" />
              <span>3D Models</span>
            </Link>
            <Link
              to="/courses"
              className="flex items-center space-x-2 text-gray-700 hover:text-red-600"
            >
              <Book className="h-5 w-5" />
              <span>AR Book</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
