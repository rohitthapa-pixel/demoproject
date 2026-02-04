import { motion } from "framer-motion";
import { nav } from "framer-motion/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const[email, setEmail]=useState("")
  const[password, setPassword]= useState("")
   const navigate=useNavigate()
  const handleSubmit = async (e:any)=>{
    
    e.preventDefault();

     const payload={
    "email":email,
    "password":password,
  } 
    if(!email || !password){
      alert("email and password required");
      return;
    }
    try{
      const res= await fetch(
         `http://localhost:5000/users?email=${email}`

      );
      const data = await res.json();
      if (data.length == 0){
        alert('user not found')
        return;
      }
      const user= data[0]

      if (user.password !== password){
        alert('incorrect password')
        return;
      }
      
      const verifiedUser={
        id:user.id,
        username:user.username,
        email:user.email,
        isverified:true,
      };
      localStorage.setItem("authUser", JSON.stringify(verifiedUser));
      alert('login successfull')
     
      navigate("/");

  }
  catch(err){
    alert("user not found")
  }
}
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      <motion.div
        className="absolute w-[320px] h-[320px] bg-blue-600 rounded-full blur-[170px] opacity-40"
        animate={{ x: [0, 50, -40, 0], y: [0, -40, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ top: "-120px", left: "-120px" }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] bg-purple-600 rounded-full blur-[160px] opacity-40"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "-120px", right: "-120px" }}
      />

      <motion.div
        className="absolute w-[240px] h-[240px] bg-pink-500 rounded-full blur-[140px] opacity-30"
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ top: "45%", left: "65%" }}
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
          Welcome Back
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-gray-300 text-center mb-8"
        >
          Login to your luxury store 
        </motion.p>

        
        <form className="space-y-4"  >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg
                       bg-gray-900/60 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg
                       bg-gray-900/60 text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       transition"
          />
          <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          onClick={handleSubmit}
          className="mt-8 w-full py-3 rounded-lg
                     bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                     text-white font-semibold
                     shadow-lg shadow-blue-500/40"
        >
          Login
        </motion.button>
        </form>

       
        

      
        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <span className="text-blue-400 hover:underline cursor-pointer">
             <Link to="/register">Register</Link>
          </span>
        </p>
      </motion.div>
    </div>
  );
}
