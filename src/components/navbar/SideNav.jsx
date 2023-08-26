import { Box, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const SideNav = () => {
  return (<Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap={5}
    mt={5}
  >
    <Button as={Link} w="100%" bg={"transparent"} borderRadius={0} to="/turnos/historial">Historial de turnos</Button>
    <Button as={Link} w="100%" bg={"transparent"} borderRadius={0} to="/turnos/turnosPendientes">Turnos pendientes</Button>
    <Button as={Link} w="100%" bg={"transparent"} borderRadius={0} to="/turnos/turnosConfirmados">Turnos confirmados</Button>
    <Button as={Link} w="100%" bg={"transparent"} borderRadius={0} to="/turnos/turnosCancelados">Turnos cancelados</Button>
    <Button as={Link} w="100%" bg={"transparent"} borderRadius={0} to="/turnos/crear">Sacar Turno</Button>
  </Box>)
}

export default SideNav