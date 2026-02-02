import './App.css'
import Footer from './layouts/Footer'
import Home from './layouts/Home'
import Navbar from './layouts/NavBar'

function App() {
  return (
    <>
   <div className="w-full h-full bg-gradient-to-r from-gray-700 to-blue-900">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
