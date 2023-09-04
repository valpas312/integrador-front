import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Divider,
} from "@chakra-ui/react";
import TurnosModal from "./TurnosModal";
import InfoModal from "./InfoModal";

//card con drilling props

// eslint-disable-next-line no-unused-vars
const CardTurno = ({ ...props }) => {
  // eslint-disable-next-line react/prop-types
  const { especialidad, fechayhora, medico, estado, key, accion, descripcion, _id } = props;

  return (
    <Card key={key} w="20vw">
      <CardHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {especialidad}
          <InfoModal _id={_id} />
      </CardHeader>
      <CardBody>
        <Text>{medico}</Text>
        <Text>{fechayhora}</Text>
      </CardBody>
      <Divider />
      <CardFooter bg="#FF686B" display="flex" justifyContent="space-between" alignItems="center" >
        <Text fontWeight="bold">{estado}</Text>
        <TurnosModal
          fechayhora={fechayhora}
          accion={accion}
          descripcion={descripcion}
          _id={_id}
          estado={estado}
        />
      </CardFooter>
    </Card>
  );
};

export default CardTurno;
