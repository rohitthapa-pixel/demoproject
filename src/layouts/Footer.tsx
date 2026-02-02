import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-gradient-to-r from-gray-700 to-blue-950 text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.nav
        className="h-40 flex justify-between items-start gap-5 p-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Brand */}
        <motion.div variants={item}>
          <h2 className="font-bold text-lg">Kotroach</h2>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={item}>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm text-gray-200 space-y-1 flex flex-col">
            <li><a href="#">Home</a></li>
            <li><a href="#">Mens</a></li>
            <li><a href="#">Womens</a></li>
            <li><a href="#">Unisex</a></li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div variants={item}>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </motion.div>

        
        <motion.div variants={item}>
          <h3 className="font-semibold mb-2 text-gray-200">Sign up for emails</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-2 py-1 text-sm rounded text-black"
          />
        </motion.div>
      </motion.nav>

      <motion.div
        className="text-center pb-4 text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-sm">© 2026 All rights reserved</p>
      </motion.div>
    </motion.footer>
  );
}

/* animation variant */
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
