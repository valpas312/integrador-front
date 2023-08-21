import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../../pages/login/Login"
import Home from "../../pages/home/Home"
import Register from "../../pages/register/Register"

import Navbar from "../navbar/Navbar";

const Router = () => {
  return (<>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default Router