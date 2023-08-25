import Navbar from "../navbar/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Grid
        templateAreas={`"nav main"`}
        gridTemplateRows={"1fr"}
        gridTemplateColumns={"200px 1fr"}
        h="100vh"
      >
        <GridItem bg="#FF686B" boxShadow="2xl" area={"nav"}>
          Nav
        </GridItem>
        <GridItem area={"main"}>
          {children}
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
