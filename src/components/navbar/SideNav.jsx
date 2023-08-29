import SideNavLink from "../../utils/SideNavLink"
import { Box } from "@chakra-ui/layout"
import { useSelector } from "react-redux"
import { Spinner } from "@chakra-ui/react"

const SideNav = () => {

  const turnos = useSelector(state => state.turnos.turnos)

  return (<Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap={5}
    mt={5}
  >
    {
      turnos.length === 0 ? <Spinner /> : <SideNavLink text="Mis turnos" to="/turnos" />
    }
    <SideNavLink text="Sacar turno" to="/turnos/crear" />
  </Box>)
}

export default SideNav