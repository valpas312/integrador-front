import Buttons from "../../components/TurnosButton/Buttons";
import { useSelector } from "react-redux";

const Turnos = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <>
      {user.verified === true ? (
        <Buttons />
      ) : (
        <h1>Verifica tu cuenta para poder solicitar un turno</h1>
      )}
    </>
  );
};

export default Turnos;
