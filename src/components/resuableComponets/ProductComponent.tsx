import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Check, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
  index: number;
};

interface User {
  id: string;
  username: string;
  email: string;
  isverified: boolean;
  cart: number[];
  favorite: number[];
}

export default function ProductCard({ product, index }: Props) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (!storedUser) return;

    const user: User = JSON.parse(storedUser);
    setIsAddedToCart(user.cart.some((item) => item === product.id));
  }, [product.id]);

  const handleCartToggle = () => {
    const storedUser = localStorage.getItem("authUser");
    if (!storedUser) return;

    const user: User = JSON.parse(storedUser);
    if (isAddedToCart) {
      user.cart = user.cart.filter((item) => item !== product.id);
    } else {
      user.cart.push(product.id);
    }

    localStorage.setItem("authUser", JSON.stringify(user));
    window.dispatchEvent(new Event("cartUpdated"));
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-2xl bg-white shadow-xl"
    >
      <div className="group relative">
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleCartToggle}
              className={`flex items-center gap-2 rounded-lg px-6 py-2 text-white
                ${
                  isAddedToCart
                    ? "bg-green-600"
                    : "bg-black hover:bg-green-900"
                }`}
            >
              <AnimatePresence mode="wait">
                {isAddedToCart ? (
                  <motion.span
                    key="added"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={18} />
                    Added
                  </motion.span>
                ) : (
                  <motion.span
                    key="add"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setLiked((prev) => !prev)}
              className="rounded-full bg-white p-3 shadow"
            >
              <Heart
                size={20}
                className={`transition-all ${
                  liked
                    ? "fill-red-500 text-red-500 scale-110"
                    : "text-gray-600"
                }`}
              />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-br from-blue-800 to-green-700 text-white">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-xl font-bold">${product.price}</p>
      </div>
    </motion.div>
  );
}
