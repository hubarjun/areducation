import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Rocket, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Learn Through Augmented Reality
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Experience interactive 3D learning across various fields
        </p>
        <Link
          to="/models"
          className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Explore Models
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            {category.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {category.title}
            </h3>
            <p className="text-gray-600">{category.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const categories = [
  {
    icon: <Brain className="h-12 w-12 text-red-600" />,
    title: "For Kids",
    description:
      "Interactive learning experiences for young minds through AR-enabled educational content.",
  },
  {
    icon: <Code className="h-12 w-12 text-red-600" />,
    title: "For Students",
    description:
      "Advanced concepts visualized in 3D for better understanding and retention.",
  },
  {
    icon: <Rocket className="h-12 w-12 text-red-600" />,
    title: "For Professionals",
    description:
      "Complex engineering and scientific models for professional development.",
  },
];

export default Home;
