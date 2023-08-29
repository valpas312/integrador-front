import { useSelector } from "react-redux";
import TurnosButton from "../../components/TurnosButton/TurnosButton";
import { Box, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import CardTurno from "./CardTurno";
import { dateFormatter } from "../../utils/dateFormatter";

const Turnos = () => {
  const turnos = useSelector((state) => state.turnos.turnos);
  const historialDeTurnos = useSelector(
    (state) => state.turnos.historialDeTurnos
  );
  const turnosPendientesAConfirmar = useSelector(
    (state) => state.turnos.turnosPendientesAConfirmar
  );
  const turnosConfirmados = useSelector(
    (state) => state.turnos.turnosConfirmados
  );
  const turnosCancelados = useSelector(
    (state) => state.turnos.turnosCancelados
  );

  const [turnosAMostrar, setTurnosAMostrar] = useState(turnos);

  const handleTurnosAMostrar = (turnos) => {
    setTurnosAMostrar(turnos);
    console.log(Object.keys(turnosAMostrar).length);
  };

  return (
    <>
      <ButtonGroup w="100%" p={4}>
        <TurnosButton onClick={() => handleTurnosAMostrar(turnos)}>
          Todos los turnos
        </TurnosButton>
        <TurnosButton onClick={() => handleTurnosAMostrar(historialDeTurnos)}>
          Historial de turnos
        </TurnosButton>
        <TurnosButton onClick={() => handleTurnosAMostrar(turnosPendientesAConfirmar)}>
          Turnos pendientes a confirmar
        </TurnosButton>
        <TurnosButton onClick={() => handleTurnosAMostrar(turnosConfirmados)}>
          Turnos confirmados
        </TurnosButton>
        <TurnosButton onClick={() => handleTurnosAMostrar(turnosCancelados)}>
          Turnos cancelados
        </TurnosButton>
      </ButtonGroup>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={4}
        padding="2rem"
      >
        {Object.keys(turnosAMostrar).length === 0 ? (
          <h1>No hay turnos para esta seleccion</h1>
        ) : (
          turnosAMostrar.map((turno) => {
            const { _id, estado, especialidad, fechayhora, medico } = turno;
            return (
              <CardTurno
                key={_id}
                estado={estado}
                especialidad={especialidad}
                fechayhora={dateFormatter(fechayhora)}
                medico={medico}
              />
            );
          })
        )}
      </Box>
    </>
  );
};

export default Turnos;
