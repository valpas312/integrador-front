// import { useSelector } from "react-redux";
// import { Spinner } from "@chakra-ui/react";
// import { useMutation } from "@tanstack/react-query";
// import { useDispatch } from "react-redux";
// import { setTurnos} from "../../features/turnos/turnosSlice";
// import { useEffect } from "react";
// import { API_URL } from "../../utils/constantes";
// import axios from "axios";
import Buttons from "../../components/TurnosButton/Buttons";

const Turnos = () => {
  // const token = useSelector((state) => state.token.value);

  // const dispatch = useDispatch();

  //Peticion de los turnos al iniciar la pagina para despues manejarla con redux
  // const { mutate, isLoading, error, isError } = useMutation({
  //   mutationKey: ["turnos"],
  //   mutationFn: () => {
  //     axios
  //       .get(`${API_URL}/turnos/`, {
  //         headers: {
  //           "x-token": token,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data.data);
  //         dispatch(setTurnos(res.data.data));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     },
  //   });
  //   useEffect(() => {
  //     mutate();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  return (
    <>
      <Buttons />
    </>
  );
};

export default Turnos;
