import Navbar from "../navbar/Navbar";
import {
  Grid,
  GridItem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import SideNav from "../navbar/SideNav";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const user = useSelector((state) => state.user.value);

  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Navbar />
      <Grid
        templateAreas={`"nav main"`}
        gridTemplateRows={"1fr"}
        gridTemplateColumns={isOpen ? "200px 1fr" : "50px 1fr"}
        h="100vh"
      >
        {user.dni && (
          <GridItem bg="#FF686B" area={"nav"}>
            <Button w="100%" borderRadius={0} bg="white" onClick={onToggle}>
              {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </Button>
            {
              isOpen &&
              <SideNav />}
          </GridItem>
        )}
        <GridItem area={"main"}>{children}</GridItem>
      </Grid>
    </>
  );
};

export default Layout;
