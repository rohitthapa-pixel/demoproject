import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../src/assets/images/logo.png";
import { toast } from "react-toastify";

interface User {
  id: string;
  username: string;
  email: string;
  isverified: boolean;
  cart: any[];
  favorite: any[];
}

export default function Navbar() {
  const [cartLength, setCartLength] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const updateCartLength = () => {
      const storedUser = localStorage.getItem("authUser");
      console.log(storedUser);
      if (!storedUser) {
        setCartLength(0);
        return;
      }

      setIsUserLoggedIn(true);
      const user: User = JSON.parse(storedUser);
      setCartLength(user?.cart?.length);
    };

    updateCartLength();
    window.addEventListener("cartUpdated", updateCartLength);

    return () => {
      window.removeEventListener("cartUpdated", updateCartLength);
    };
  }, []);

  const MotionLink = motion(Link);

  const navItems = [
    { label: "Womens", path: "/womens" },
    { label: "Mens", path: "/mens" },
    { label: "Unisex", path: "/unisex" },
    { label: "About", path: "/about" },
    { label: isUserLoggedIn ? "Logout" : "Login", path: isUserLoggedIn ? "/" : "/login" },
  ];

  return (
    <motion.nav
      className="h-20 w-full bg-gray-800 shadow flex items-center justify-between px-6 text-white"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/">
        <motion.div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="Logo" className="h-20 w-20" />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Ketroch
          </span>
        </motion.div>
      </Link>

      <div className="flex items-center gap-6 text-lg font-medium">
        {navItems.map((item, i) => (
          <MotionLink
            key={i}
            to={item.path}
            whileHover={{ scale: 1.1, color: "#dc2626" }}
            onClick={() => {
              if(item.label === 'Logout') {
                localStorage.clear();
                toast.success('logout successfull');
                window.location.href = "/";
              }
            }}
          >
            {item.label}
          </MotionLink>
        ))}
      </div>

      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
      >
        <span>Cart</span>
        <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
          {cartLength}
        </span>
      </motion.div>
    </motion.nav>
  );
}
