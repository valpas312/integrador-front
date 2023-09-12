import { useSelector, useDispatch } from "react-redux";
import TurnosButton from "./TurnosButton";
import {
  Menu,
  MenuList,
  MenuButton,
  Button,
  MenuItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { setTurnosAMostrar } from "../../features/turnos/turnosSlice"

const Filtros = () => {
  const turnos = useSelector((state) => state.turnos.turnos);
  const [isLargerThan1220] = useMediaQuery("(min-width: 1220px)");

  const dispatch = useDispatch();

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
    dispatch(setTurnosAMostrar(turnos));
    console.log(turnos);
  };
  return (
    <>
      {isLargerThan1220 ? (
        <>
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
        </>
      ) : (
        <Menu>
          <MenuButton as={Button}>Filtrar por</MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleTurnosAMostrar(turnos)}>
              Todos los turnos
            </MenuItem>
            <MenuItem onClick={() => handleTurnosAMostrar(historialDeTurnos)}>
              Historial de turnos
            </MenuItem>
            <MenuItem
              onClick={() => handleTurnosAMostrar(turnosPendientesAConfirmar)}
            >
              Turnos pendientes a confirmar
            </MenuItem>
            <MenuItem onClick={() => handleTurnosAMostrar(turnosConfirmados)}>
              Turnos confirmados
            </MenuItem>
            <MenuItem onClick={() => handleTurnosAMostrar(turnosCancelados)}>
              Turnos cancelados
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default Filtros;
