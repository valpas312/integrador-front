import { useMutation } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { API_URL } from "../../utils/constantes"
import axios from "axios"
import { setTurnos } from "../../features/turnos/turnosSlice"
import { useEffect } from "react"
import { Box, Divider, Text } from "@chakra-ui/react"
import CredencialDigital from "./CredencialDigital"
import CardsHome from "./CardsHome"

const Home = () => {
  const token = useSelector(state => state.token.value)
  const user = useSelector(state => state.user.value)

  const dispatch = useDispatch()

  //Peticion de los turnos al iniciar la pagina para despues manejarla con redux
  const { mutate } = useMutation({
    mutationKey: ["turnos"],
    mutationFn: () => {
      axios.get(`${API_URL}/turnos/`,{
        headers: {
          "x-token": token
        },
      })
        .then(res => {
          dispatch(setTurnos(res.data.data))
          console.log(res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  })


  useEffect(() => {
    mutate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      <CardsHome>
        <Text>Cartilla: Global</Text>
      </CardsHome>
    </Box>
  </Box>)
}

export default Home