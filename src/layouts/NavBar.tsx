import { motion } from "framer-motion";
import logo from "../../src/assets/images/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const MotionLink = motion(Link)
  const navItems=[
  { label: "Womens", path: "/womens" },
  { label: "Mens", path: "/mens" },
  { label: "Unisex", path: "/unisex" },
  { label: "About", path: "/about" },
  { label: "Login", path: "/login" }
  ];
  return (
    <motion.nav
      className="h-20 w-full bg-gray-800 shadow flex items-center justify-between px-6"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <Link to ="/">
      <motion.div
        className="flex items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={logo} alt="Logo" className="h-20 w-20" />
        <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Ketroch
        </span>
      </motion.div>
      </Link>

      {/* Menu */}
      <motion.div
        className="flex items-center gap-6 text-lg font-medium text-white "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {navItems.map((item, i) => (
          <MotionLink
            key={i}
            to={item.path}
            className="cursor-pointer"
            whileHover={{ scale: 1.1, color: "#dc2626" }}
          >
            {item.label}
          </MotionLink>
        ))}
        <motion.span whileHover={{ scale: 1.1, color: "#dc2626" }}>
          How to order
        </motion.span>
      </motion.div>

      {/* Search */}
      <motion.div
        className="flex items-center gap-2 border rounded-md px-3 py-1 w-80"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <input
          type="text"
          placeholder="Search for products..."
          className="outline-none text-sm w-full bg-transparent
             text-white placeholder:text-white/70"
        />

      </motion.div>

      {/* Cart */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm font-medium">Cart</span>
        <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
          0
        </span>
      </motion.div>
    </motion.nav>
  );
}
