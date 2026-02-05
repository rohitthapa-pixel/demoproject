import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-gradient-to-r from-gray-700 to-gray-950 text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.nav
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 p-6 sm:grid-cols-2 md:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
       
        <motion.div variants={item}>
          <h2 className="text-xl font-bold">Kotroach</h2>
          <p className="mt-2 text-sm text-gray-300">
            Premium fashion for modern lifestyle.
          </p>
        </motion.div>

        
        <motion.div variants={item}>
          <h3 className="mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Home", "Mens", "Womens", "Unisex"].map(link => (
              <li key={link}>
                <a
                  href="#"
                  className="transition hover:text-white hover:underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        
        <motion.div variants={item}>
          <h3 className="mb-3 font-semibold">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaFacebook /> Facebook
            </li>
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <FaTwitter /> Twitter
            </li>
          </ul>
        </motion.div>

        
       
      </motion.nav>

    
      <motion.div
        className="border-t border-gray-700 py-4 text-center text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-sm">© 2026 Kotroach. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}


const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
