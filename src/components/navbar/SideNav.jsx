import SideNavLink from "../../utils/SideNavLink"
import { Box } from "@chakra-ui/layout"

const SideNav = () => {

  return (<Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap={5}
    mt={5}
  >
    <SideNavLink text="Turnos" to="/turnos" />
  </Box>)
}

export default SideNav