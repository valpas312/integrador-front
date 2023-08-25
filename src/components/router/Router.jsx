import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useElement } from "../../utils/useElement";

import Login from "../../pages/login/Login"
import Home from "../../pages/home/Home"
import Register from "../../pages/register/Register"
import CrearTurno from "../../pages/turnos/CrearTurno";
import Turnos from "../../pages/turnos/Turnos";

import Layout from "../layout/Layout";

const Router = () => {
  return (<>
    <BrowserRouter>
        <Layout>
        <Routes>
            <Route path="/" element={useElement(<Home/>, <Login/>)} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/turnos/crear" element={useElement(<CrearTurno/>, <Login/>)} />
            <Route path="/turnos" element={useElement(<Turnos/>, <Login/>)} />
        </Routes>
        </Layout>
    </BrowserRouter>
  </>
  )
}

export default Router