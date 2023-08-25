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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { logout } from "../../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

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
      {user?.dni ? (
        <Box display="flex" alignItems="center" maxW="100vw" gap={5}>
          <Container display="flex" maxW="100%">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Star_of_life.svg/225px-Star_of_life.svg.png"
              maxW="50px"
            />
            <Text fontSize="2xl">Medicina Privada</Text>
          </Container>
          <Link to="/">Home</Link>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar bg="teal.500" size="xs" />
            </MenuButton>
            <MenuList color="black" boxShadow="lg">
              <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
              <MenuItem>
                <Link as="button" w="100%" to="/turnos">
                  Turnos
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/turnos/crear">Sacar Turno</Link>
              </MenuItem>
              {!user.verified && (
                <MenuItem>
                  <Link as="button" w="100%" to="/verify">
                    Verificar usuario
                  </Link>
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </Box>
      ) : (
        <Box display="flex" gap={4} >
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
