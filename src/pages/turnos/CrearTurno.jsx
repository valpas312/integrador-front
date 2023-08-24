import {
    Button,
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API_URL } from '../../utils/constantes'
import { useDispatch, useSelector } from 'react-redux'
import { setTurnos } from '../../features/turnos/turnosSlice'

const CrearTurno = () => {
    const dispatch = useDispatch()
    const token  = useSelector((state) => state.token.value)
    const [fechayhora, setFechayhora] = useState('')
    const [medico, setMedico] = useState('')
    const [especialidad, setEspecialidad] = useState('')

    const handleOnChange = (e) => {
        if (e.target.id === 'fechayhora') {
            setFechayhora(e.target.value)
        } else if (e.target.id === 'medico') {
            setMedico(e.target.value)
        } else if (e.target.id === 'especialidad') {
            setEspecialidad(e.target.value)
        }
    };

    const { mutate, isLoading } = useMutation({
        mutationKey: ['turno'],
        mutationFn: () => {
            return axios.post(
                `${API_URL}/turnos/`,
                {
                    fechayhora,
                    reservacion: Date.now(),
                    paciente: token,
                    medico,
                    especialidad,
                },
                {
                    headers: {
                        "x-token": token,
                    },
                }
            )
        }
    })

    const handleOnSubmit = (e) => {
        e.preventDefault()
        mutate(
            {},
            {
                onSuccess: (data) => {
                    console.log(data.data),
                    dispatch(setTurnos(data.data))
                },
                onError: (error) => {
                    console.log(error)
                },
            }
        )
    };

  return (<>
    <FormControl
        as="form"
        onSubmit={handleOnSubmit}
    >
        <FormLabel>Fecha y Hora</FormLabel>
        <Input type="datetime-local"  id='fechayhora' onChange={handleOnChange}/>

        <FormLabel>Medico</FormLabel>
        <Input type="text" id='medico' onChange={handleOnChange} />
        
        <FormLabel>Especialidad</FormLabel>
        <Input type="text" id='especialidad' onChange={handleOnChange} />

        <Button type='submit'>
            {
                isLoading ? 'Cargando...' : 'Crear Turno'
            }
        </Button>
    </FormControl>
  </>)
}

export default CrearTurno