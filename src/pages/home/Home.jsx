import { Box, Divider, Spinner, Text } from "@chakra-ui/react";
import CredencialDigital from "./CredencialDigital";
import CardsHome from "./CardsHome";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setTurnos } from "../../features/turnos/turnosSlice";
import { API_URL } from "../../utils/constantes";
import axios from "axios";
import { handleError } from "../../utils/handleError";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const token = useSelector((state) => state.token.value);
  const { mutate, isLoading, error, isError } = useMutation({
    mutationKey: ["turnos"],
    mutationFn: () => {
      axios
        .get(`${API_URL}/turnos/`, {
          headers: {
            "x-token": token,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          dispatch(setTurnos(res.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={5}
      flexWrap="wrap"
    >
      <Text fontSize="2xl" color="gray.600" fontWeight="bold" m={4}>
        Integrante:{user.nombre}
      </Text>
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
        flexWrap="wrap"
      >
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          handleError(error)
        ) : (
          <>
            <CardsHome>
              <Text>Turnos</Text>
            </CardsHome>
            <CardsHome>
              <Text>Reintegros</Text>
            </CardsHome>
            <CardsHome>
              <Text>Autorizaciones</Text>
            </CardsHome>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
