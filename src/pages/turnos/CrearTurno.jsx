import CrearTurnos from "../../components/CrearTurno/CrearTurnos";
import { useSelector } from "@tanstack/react-query";

const CrearTurno = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <>
      {user.verified === true ? (
        <CrearTurnos />
      ) : (
        <h1>Verifica tu cuenta para poder sacar un turno</h1>
      )}
    </>
  );
};

export default CrearTurno;
