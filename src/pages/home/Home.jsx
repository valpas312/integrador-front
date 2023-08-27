import { useMutation } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { API_URL } from "../../utils/constantes"
import axios from "axios"
import { setTurnos } from "../../features/turnos/turnosSlice"
import { useEffect } from "react"

const Home = () => {
  const token = useSelector(state => state.token.value)

  const dispatch = useDispatch()

  const { mutate } = useMutation({
    mutationKey: ["turnos"],
    mutationFn: () => {
      axios.get(`${API_URL}/turnos/`,{
        headers: {
          "x-token": token
        },
      })
        .then(res => {
          dispatch(setTurnos(res.data.data))
          console.log(res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  })


  useEffect(() => {
    mutate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (<>
    <h1>Home</h1>
  </>)
}

export default Home