import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Divider,
    Spinner,
  } from '@chakra-ui/react'

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API_URL } from '../../utils/constantes'
import { useDispatch, useSelector } from 'react-redux'
import { setTurnos } from '../../features/turnos/turnosSlice'
import { handleError } from '../../utils/handleError'

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

    const { mutate, isLoading, isError, isSuccess, error, data} = useMutation({
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
        maxW="lg"
        mx="auto"
        my="8"
        p="8"
        bg="white"
        borderRadius="md"
        boxShadow="md"
    >
        <FormLabel>Fecha y Hora</FormLabel>
        <Input type="datetime-local"  id='fechayhora' onChange={handleOnChange} isRequired/>

        <FormLabel>Medico</FormLabel>
        <Input type="text" id='medico' onChange={handleOnChange} isRequired />
        
        <FormLabel>Especialidad</FormLabel>
        <Input type="text" id='especialidad' onChange={handleOnChange} isRequired />

        <Divider my='4' />

        <Button type='submit'
            colorScheme='teal'
            size='lg'
            fontSize='md'
            isLoading={isLoading}
        >
            {
                isLoading ? <Spinner /> : isError ? handleError(error) : isSuccess ? data : 'Crear Turno'
            }
        </Button>
    </FormControl>
  </>)
}

export default CrearTurno