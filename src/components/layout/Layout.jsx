import Navbar from "../navbar/Navbar";
import { Grid, GridItem, Button, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import SideNav from "../navbar/SideNav";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const user = useSelector((state) => state.user.value);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Navbar />
      {
        //Si hay un usuario logueado y la pantalla es mayor a 500px, se muestra el sidenav, sino solo muestra el children
        isLargerThan500 ? (
      <Grid
        //Si hay un usuario logueado, el sidenav ocupa el 20% del ancho de la pantalla
        templateAreas={`"${user?.dni ? "nav" : ""} main"`}
        gridTemplateRows={user?.dni ? "1fr" : ""}
        gridTemplateColumns={
          user?.dni ? (user.dni && isOpen ? "200px 1fr" : "50px 1fr") : ""
        }
        h="100vh"
      >
        {//Si hay un usuario logueado, se muestra el sidenav
          user?.dni && (
          <GridItem bg="#FF686B" area={"nav"}>
            <Button w="100%" borderRadius={0} bg="white" onClick={onToggle}>
              {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </Button>
            {isOpen && <SideNav />}
          </GridItem>
        )}
        <GridItem area={"main"} bg="#F6F6F6">
          {children}
        </GridItem>
      </Grid>
        ) : (
          <GridItem area={"main"}>
          {children}
        </GridItem>
        )
      }
    </>
  );
};

export default Layout;
