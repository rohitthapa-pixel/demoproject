import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
 
export default function Register() {
  const [username, setUserName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const handleSubmit = async (e:any) =>{
    e.preventDefault();
    const payload ={
      'username': username,
      'email': email,
      'password': password,
      'cart':[],
      'favorite':[]
    }
    try{
      const res= await fetch("http://localhost:5000/users",{
        method:"POST",
        headers:{
          "content-Type": "application/json",
        },
        body:JSON.stringify(payload),
      })
      if(!res.ok) throw new Error("Failed");
      alert("user registered successfully")
      setUserName("");
      setEmail("");
      setPassword("");
    } catch(err){
      alert("something went wrong")
    }
  }
  
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">

      
      <motion.div
        className="absolute w-[350px] h-[350px] bg-purple-600 rounded-full blur-[180px] opacity-40"
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ top: "-120px", left: "-120px" }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] bg-blue-600 rounded-full blur-[160px] opacity-40"
        animate={{ x: [0, -50, 40, 0], y: [0, 50, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "-120px", right: "-120px" }}
      />

      <motion.div
        className="absolute w-[250px] h-[250px] bg-pink-500 rounded-full blur-[140px] opacity-30"
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ top: "40%", left: "60%" }}
      />

      
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl
                   bg-white/10 backdrop-blur-2xl
                   border border-white/20
                   shadow-2xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-white text-center mb-2"
        >
          Create Account
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-gray-300 text-center mb-8"
        >
          Join our luxury store 
        </motion.p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            name="username"
            onChange={(e)=> setUserName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg
                       bg-gray-900/60 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       transition"
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg
                       bg-gray-900/60 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       transition"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg
                       bg-gray-900/60 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-purple-500
                       transition"
          />
                  <motion.button
        type="submit"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 w-full py-3 rounded-lg
                     bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600
                     text-white font-semibold
                     shadow-lg shadow-purple-500/40"
        >
          Register
        </motion.button>
        </form>

        


        
        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <span className="text-purple-400 hover:underline cursor-pointer">
            <Link to="/login">Login</Link>
            
          </span>
        </p>
      </motion.div>
    </div>
  );
}
