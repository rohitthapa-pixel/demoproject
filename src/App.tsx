import './App.css'
import Home from './layouts/Home'
import Footer from './layouts/Footer'
import Navbar from './layouts/NavBar'
import ProductPage from './layouts/Product'

function App() {
  return (
    <>
   <div className="w-full h-full bg-gradient-to-r from-gray-700 to-blue-900">
      <Navbar></Navbar>
      <Home></Home>
      <ProductPage></ProductPage>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
