import { Box, Divider, Text } from "@chakra-ui/react"
import CredencialDigital from "./CredencialDigital"
import CardsHome from "./CardsHome"
import { useSelector } from "react-redux"

const Home = () => {
  const user = useSelector(state => state.user.value)
  return (<Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap={5}
    flexWrap="wrap"
  >
    <Text
      fontSize="2xl"
      color="gray.600"
      fontWeight="bold"
      m={4}
    >Integrante:{user.nombre}</Text>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={2}
      w="90%"
      boxShadow="base"
      rounded="md"
      bg="#FFFFFF"
      p={2}
    >
      Credencial Digital
      <Divider />
      <CredencialDigital nombre={user.nombre} dni={user.dni} />
    </Box>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      w="100%"
    >
    <CardsHome>
        <Text>Cartilla: Global</Text>
    </CardsHome>
    <CardsHome>
        <Text>Cartilla: Global</Text>
    </CardsHome>
    </Box>
  </Box>)
}

export default Home