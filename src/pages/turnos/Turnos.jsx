import { useSelector } from "react-redux"
import TurnosButton from "../../components/TurnosButton/TurnosButton"
import { ButtonGroup } from "@chakra-ui/react"
import { useState } from "react"

const Turnos = () => {
  const turnos = useSelector(state => state.turnos.turnos)
  const historialDeTurnos = useSelector(state => state.turnos.historialDeTurnos)
  const turnosPendientesAConfirmar = useSelector(state => state.turnos.turnosPendientesAConfirmar)
  const turnosConfirmados = useSelector(state => state.turnos.turnosConfirmados)
  const turnosCancelados = useSelector(state => state.turnos.turnosCancelados)


  const [turnosAMostrar, setTurnosAMostrar] = useState(turnos)

  const handleTurnosAMostrar = (turnos) => {
    setTurnosAMostrar(turnos)
    console.log(Object.keys(turnosAMostrar).length)
  };

  return (<>
  <ButtonGroup>
    <TurnosButton
      onClick={() => handleTurnosAMostrar(turnos)}
    >
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
      Turnos proximos
    </TurnosButton>
    <TurnosButton
      onClick={() => handleTurnosAMostrar(turnosConfirmados)}
    >
      Turnos pendientes a confirmar
    </TurnosButton>
    <TurnosButton
      onClick={() => handleTurnosAMostrar(turnosCancelados)}
    >
      Turnos confirmados
    </TurnosButton>
  </ButtonGroup>

    {
      Object.keys(turnosAMostrar).length === 0 ? <h1>No hay turnos para esta seleccion</h1> :
      turnosAMostrar.map((turno) => {
        const { _id, estado, especialidad, fechayhora, medico } = turno
        return (
          <div key={_id}>
            <p>{fechayhora}</p>
            <p>{estado}</p>
            <p>{especialidad}</p>
            <p>{medico}</p>
          </div>
        )
      })
    }

  </>
  )
}

export default Turnos