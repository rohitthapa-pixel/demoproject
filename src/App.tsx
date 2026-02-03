import './App.css'
import Home from './components/homePage/Banner.tsx'
import Footer from './layouts/Footer'
import Navbar from './layouts/NavBar'
import ProductPage from './components/homePage/Product.tsx'
import Router from "./routes/route.tsx"

function App() {
  return (
    <>
   <div className="w-full h-full bg-gradient-to-r from-gray-700 to-blue-900">
      <Navbar/>
      <Router />
      <Footer/>
      </div>
    </>
  )
}

export default App
