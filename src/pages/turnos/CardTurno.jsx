import { Card, CardHeader, CardBody, CardFooter, Text, Divider } from '@chakra-ui/react'

// eslint-disable-next-line no-unused-vars
const CardTurno = ({...props}) => {

    // eslint-disable-next-line react/prop-types
    const { especialidad, fechayhora, medico, estado, key } = props

  return (
    <Card key={key} w="20vw">
        <CardHeader>{especialidad}</CardHeader>
        <CardBody>
            <Text>{medico}</Text>
            <Text>{fechayhora}</Text>
        </CardBody>
        <Divider />
        <CardFooter>
            <Text>{estado}</Text>
        </CardFooter>
    </Card>
  )
}

export default CardTurno