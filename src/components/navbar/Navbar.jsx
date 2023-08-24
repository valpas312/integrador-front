import {
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { logout } from "../../features/user/userSlice"

const Navbar = () => {
  const user = useSelector((store) => store.user.value.dni);
  const dispatch = useDispatch();
  return (
    <>
      <Container
        maxW="100%"
        bg="#FF686B"
        color="white"
        p={6}
        display="flex"
        justifyContent="flex-end"
        gap={4}
        alignItems="center"
        boxShadow="lg"
        zIndex="99"
        position="sticky"
        top="0"
      >
        {user ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/turnos/crear">Crear Turno</Link>
            <Link to="/turnos">Turnos</Link>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
              </MenuButton>
              <MenuList color="black">
                <MenuItem onClick={dispatch(logout)}>
                  Logout
                </MenuItem>
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
