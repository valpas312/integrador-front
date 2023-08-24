import Navbar from "../navbar/Navbar";
import { Box } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};

export default Layout;
