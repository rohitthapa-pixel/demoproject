import React from "react";
import products from "../data/products.json";
import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  }
};

const womens = () => {
  const mensProduct = products.filter(
    (item) => item.gender === "women"
  );

  return (
    <motion.div
      className="w-full min-h-screen px-6 py-12 bg-gradient-to-br from-blue-950 to-green-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      
      <motion.h1
        className="text-4xl font-bold mb-12 text-center tracking-wide bg-gradient-to-br from-green-400 to-blue-800 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        women’s Collection
      </motion.h1>

      {mensProduct.length === 0 ? (
        <p className="text-center text-gray-500">
          Products are not available
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {mensProduct.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              
              <motion.img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              
              <div className="p-5 bg-gradient-to-br from-gray-600 to-orange-200">
                <h2 className="text-lg font-semibold mb-1 ">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  ${product.price}
                </p>

                <motion.button
                
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.03 }}
                  className="w-full bg-gradient-to-br from-green-400 to-blue-800  text-white py-2 rounded-full tracking-wide hover:bg-gray-800  transition"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default womens;
