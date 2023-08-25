import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../../pages/login/Login"
import Home from "../../pages/home/Home"
import Register from "../../pages/register/Register"
import CrearTurno from "../../pages/turnos/CrearTurno";
import Turnos from "../../pages/turnos/Turnos";

import Layout from "../layout/Layout";

const Router = () => {
  return (<>
    <BrowserRouter>
        <Layout />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/turnos/crear" element={<CrearTurno/>} />
            <Route path="/turnos" element={<Turnos/>} />
        </Routes>
    </BrowserRouter>
  </>
  )
}

export default Router