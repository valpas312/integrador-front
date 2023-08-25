import {
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { logout } from "../../features/user/userSlice"

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  return (
    <>
      <Container
        maxW="100%"
        bg="#FF686B"
        color="white"
        p={5}
        display="flex"
        justifyContent="flex-end"
        gap={4}
        alignItems="center"
        boxShadow="lg"
        zIndex="99"
        position="sticky"
        top="0"
      >
        {user?.dni ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/turnos/crear">Crear Turno</Link>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar bg='teal.500' size="xs" />
              </MenuButton>
              <MenuList color="black"
              boxShadow="lg"
              >
                <MenuItem onClick={()=>dispatch(logout()) } >
                  Logout
                </MenuItem>
                <MenuItem>
                  <Link as="button" w="100%" to="/turnos">Turnos</Link>
                </MenuItem>
                {
                  !user.verified && (
                    <MenuItem>
                      <Link as="button" w="100%" to="/verify">Verificar usuario</Link>
                    </MenuItem>
                  )
                }
              </MenuList>
            </Menu>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </Container>
    </>
  );
};

export default Navbar;
