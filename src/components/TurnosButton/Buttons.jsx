import { ButtonGroup } from "@chakra-ui/react";
import CardTurno from "../../pages/turnos/CardTurno";
import { dateFormatter } from "../../utils/dateFormatter";
import { Box } from "@chakra-ui/react";
import Filtros from "./Filtros";
import { useSelector } from "react-redux";

const Buttons = () => {
  const turnosAMostrar = useSelector((state) => state.turnos.turnosAMostrar);
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
        <Filtros />
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
          <h1>Seleccione una opcion</h1>
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
