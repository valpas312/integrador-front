import { Box } from "@chakra-ui/layout"
import SideNavLink from "./SideNavLink"

const SideNav = () => {
  return (<Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap={5}
    mt={5}
  >
    <SideNavLink text="Mis turnos" to="/turnos" />
    <SideNavLink text="Sacar turno" to="/turnos/crear" />
  </Box>)
}

export default SideNav