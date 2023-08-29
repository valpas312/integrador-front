import { Card, CardHeader, CardBody, CardFooter, Text, Divider } from '@chakra-ui/react'
import TurnosModal from './TurnosModal'
import InfoModal from './InfoModal'


// eslint-disable-next-line no-unused-vars
const CardTurno = ({...props}) => {

    // eslint-disable-next-line react/prop-types
    const { especialidad, fechayhora, medico, estado, key, accion, descripcion } = props

  return (
    <Card key={key} w="20vw">
        <CardHeader display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.200"

        >
        {especialidad}
        <InfoModal />
        </CardHeader>
        <CardBody>
            <Text>{medico}</Text>
            <Text>{fechayhora}</Text>
        </CardBody>
        <Divider />
        <CardFooter
            bg="#FF686B"
        >
            <Text
                fontWeight="bold"
            >{estado}</Text>
            <TurnosModal fechayhora={fechayhora} accion={accion} descripcion={descripcion} />
        </CardFooter>
    </Card>
  )
}

export default CardTurno