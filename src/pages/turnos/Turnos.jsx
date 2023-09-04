import { useSelector } from "react-redux";
import TurnosButton from "../../components/TurnosButton/TurnosButton";
import { Box, ButtonGroup, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import CardTurno from "./CardTurno";
import { dateFormatter } from "../../utils/dateFormatter";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setTurnos} from "../../features/turnos/turnosSlice";
import { useEffect } from "react";
import { API_URL } from "../../utils/constantes";
import axios from "axios";

const Turnos = () => {
  const token = useSelector((state) => state.token.value);

  const dispatch = useDispatch();

  //Peticion de los turnos al iniciar la pagina para despues manejarla con redux
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
    }, [
      mutate,
    ]);
    
  const turnos = useSelector((state) => state.turnos.turnos);

  const [turnosAMostrar, setTurnosAMostrar] = useState(turnos);

  //Estados de redux
  const turnosPendientesAConfirmar = useSelector(
    (state) => state.turnos.turnosPendientesAConfirmar
  );
  const turnosConfirmados = useSelector(
    (state) => state.turnos.turnosConfirmados
  );
  const turnosCancelados = useSelector(
    (state) => state.turnos.turnosCancelados
  );
  const historialDeTurnos = useSelector(
    (state) => state.turnos.historialDeTurnos
  );

  const handleTurnosAMostrar = (turnos) => {
    setTurnosAMostrar(turnos);
    console.log(turnos)
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        console.log(error)
      ) : (
        !isError ? (
          <>
            <ButtonGroup
              w="100%"
              p={4}
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              gap={4}
            >
              <TurnosButton onClick={() => handleTurnosAMostrar(turnos)}>
                Todos los turnos
              </TurnosButton>
              <TurnosButton
                onClick={() => handleTurnosAMostrar(historialDeTurnos)}
              >
                Historial de turnos
              </TurnosButton>
              <TurnosButton
                onClick={() => handleTurnosAMostrar(turnosPendientesAConfirmar)}
              >
                Turnos pendientes a confirmar
              </TurnosButton>
              <TurnosButton
                onClick={() => handleTurnosAMostrar(turnosConfirmados)}
              >
                Turnos confirmados
              </TurnosButton>
              <TurnosButton
                onClick={() => handleTurnosAMostrar(turnosCancelados)}
              >
                Turnos cancelados
              </TurnosButton>
            </ButtonGroup>

            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              gap={10}
              padding="2rem"
            >
              {
                (turnosAMostrar == null) | undefined ? (
                <h1>No hay turnos para esta seleccion</h1>
              ) : Object.keys(turnosAMostrar).length === 0 ? (
                <h1>No hay turnos para esta seleccion</h1>
              ) : (
                turnosAMostrar.map((turno) => {
                  const { _id, estado, especialidad, fechayhora, medico } =
                    turno;
                  return (
                    <CardTurno
                      key={_id}
                      estado={estado}
                      especialidad={especialidad}
                      fechayhora={dateFormatter(fechayhora)}
                      medico={medico}
                      accion="Confirmar turno"
                      descripcion="¿Está seguro que desea confirmar el turno?"
                      _id={_id}
                    />
                  );
                })
              )}
            </Box>
          </>
        )
        : <p>{error}</p>
      )}
    </>
  );
};

export default Turnos;
