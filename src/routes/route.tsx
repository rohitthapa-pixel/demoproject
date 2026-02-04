import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home";
import Mens from "../pages/mens";
import Womens from "../pages/womens";
import Unisex from "../pages/unisex";
import Login from "../pages/login"
import Register from '../pages/register';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/mens' element={<Mens />}/>
            <Route path='/womens' element={<Womens />}/>
            <Route path='/unisex' element={<Unisex />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    )
};