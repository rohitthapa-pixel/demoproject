import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home";
import Mens from "../pages/mens";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/mens' element={<Mens />}/>
        </Routes>
    )
};