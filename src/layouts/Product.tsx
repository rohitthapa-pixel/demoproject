import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Heart, ShoppingCart, Check } from "lucide-react";

export default function ProductPage() {
  const products = [
    {
      id: 1,
      name: "Designer Handbag",
      price: "$189",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800",
    },
    {
      id: 2,
      name: "Premium Sneakers",
      price: "$159",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800",
    },
    {
      id: 3,
      name: "Luxury Coat",
      price: "$299",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800",
    },
    {
      id: 4,
      name: "Classic Watch",
      price: "$199",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
    },
    {
      id: 5,
      name: "Fashion Sunglasses",
      price: "$99",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800",
    },
  ];

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


      {/* <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => {
          const isFav = favorites.includes(product.id);
          const inCart = cart.includes(product.id);

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-white shadow-xl"
            >
              <div className="group relative overflow-hidden rounded-2xl">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="h-64 sm:h-72 md:h-80 w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="absolute inset-0 flex items-center justify-center gap-5 bg-black/50 
                  opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  
                  <motion.button
                    onClick={() => addToCart(product.id)}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white shadow-lg"
                  >
                    {inCart ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : (
                      <ShoppingCart className="h-5 w-5" />
                    )}
                  </motion.button>

                  <motion.button
                    onClick={() => toggleFavorite(product.id)}
                    whileTap={{ scale: 0.85 }}
                    className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white shadow-lg"
                  >
                    <AnimatePresence mode="wait">
                      {isFav ? (
                        <motion.div
                          key="fav"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="not-fav"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Heart className="h-5 w-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h2 className="text-base sm:text-lg font-bold">
                  {product.name}
                </h2>
                <p className="mt-1 text-gray-600">{product.price}</p>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full rounded-xl bg-black py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white hover:bg-green-900"
                >
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div> */}
      
    </div>
  );
}
