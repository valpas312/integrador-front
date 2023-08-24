import { Container } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <Container
        maxW="100vw"
        bg="#FF686B"
        color="white"
        p={4}
        display="flex"
        justifyContent="space-around"
        alignItems="center"

    >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/turnos/crear">Crear Turno</Link>
    </Container>
  )
}

export default Navbar