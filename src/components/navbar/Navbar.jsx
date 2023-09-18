import {
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Image,
  Text,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { logout } from "../../features/user/userSlice";
import { logoutT } from "../../features/turnos/turnosSlice";

const Navbar = () => {
  //Media queries
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  //Redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const token = useSelector((state) => state.token.value);

  return (
    <Box
      maxW="100vw"
      bg="#FF686B"
      color="white"
      p={5}
      boxShadow="xl"
      zIndex="99"
      position="sticky"
      top="0"
    >
    {/* //Si hay un usuario logueado y hay un token, se muestra toda la navbar, sino solo muestra los botones de login y register */}
      {user?.dni && token ? (
        <Box display="flex" alignItems="center" maxW="100vw" gap={5}>
          <Container display="flex" alignItems="center" maxW="100%">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Star_of_life.svg/225px-Star_of_life.svg.png"
              maxW="50px"
            />
            {/* Si la pantalla es de mas de 768px de ancho se muestra el logo */}
            {isLargerThan768 && <Text fontSize="md">Medicina Privada</Text>}
          </Container>
          <Link to="/">Inicio</Link>
          {
            //Si hay un usuario logueado y la pantalla es mayor a 500px, se muestra el sidenav
            !isLargerThan500 && (
              <>
                <Link to="/turnos">Turnos</Link>
                <Link to="turnos/crear">Sacar turno</Link>
              </>
            )
          }
          {/* Botones del usuario */}
          <Menu>
            <MenuButton
              as={Button}
              bg={"transparent"}
              _hover={{ bg: "#e25f61" }}
              rightIcon={<ChevronDownIcon />}
            >
              {isLargerThan768 && <Avatar bg="teal.500" size="xs" />}
            </MenuButton>
            <MenuList color="black" boxShadow="lg">
              <MenuItem
                onClick={() => {
                  dispatch(logout()), dispatch(logoutT());
                }}
              >
                Logout
              </MenuItem>
              {!user.verified && (
                <MenuItem>
                  <Link as="button" w="100%" to="/verificar">
                    Verificar usuario
                  </Link>
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </Box>
      ) : (
        <Box display="flex" gap={4}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
