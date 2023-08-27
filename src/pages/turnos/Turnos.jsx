import { useSelector } from "react-redux"

const Turnos = () => {

  const turnos = useSelector(state => state.turnos.turnos)

  console.log(turnos)

  return (<>
    <h1>Turnos</h1>
    
  </>
  )
}

export default Turnos