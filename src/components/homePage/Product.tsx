import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingCart, Check } from "lucide-react";
import ProductComponent from "../resuableComponets/ProductComponent";
import products from "../../data/products.json";

export default function FeaturedProductSection() {
  const [favorites, setFavorites] = useState<Number[]>([]);
  const [cart, setCart] = useState<Number[]>([]);
  useEffect(() => {
  console.log(cart)
}, [cart]);
  

  const toggleFavorite = (id:Number) => {
    setFavorites((prev:Number[]) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const addToCart = (id:Number) => {
    if (!cart.includes(id)) setCart([...cart, id]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 to-gray-800 px-4 sm:px-6 py-10">
    <h1 className="mb-10 text-center text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-white-800 to-green-100 bg-clip-text text-transparent">
  Fancy Collection
</h1>


      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => {
          return (
            <ProductComponent
            product={product}
            index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
