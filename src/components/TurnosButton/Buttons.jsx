import { useSelector } from "react-redux";
import TurnosButton from "./TurnosButton";
import { ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import CardTurno from "../../pages/turnos/CardTurno";
import { dateFormatter } from "../../utils/dateFormatter";
import { Box } from "@chakra-ui/react";

const Buttons = () => {
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
    console.log(turnos);
  };

  return (
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
        <TurnosButton onClick={() => handleTurnosAMostrar(historialDeTurnos)}>
          Historial de turnos
        </TurnosButton>
        <TurnosButton
          onClick={() => handleTurnosAMostrar(turnosPendientesAConfirmar)}
        >
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
        gap={10}
        padding="2rem"
      >
        {(turnosAMostrar == null) | undefined ? (
          <h1>No hay turnos para esta seleccion</h1>
        ) : Object.keys(turnosAMostrar).length === 0 ? (
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
                accion="Confirmar turno"
                descripcion="¿Está seguro que desea confirmar el turno?"
                _id={_id}
              />
            );
          })
        )}
      </Box>
    </>
  );
};

export default Buttons;
