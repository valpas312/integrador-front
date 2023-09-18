import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Divider,
  useMediaQuery
} from "@chakra-ui/react";
import TurnosModal from "./TurnosModal";
import InfoModal from "./InfoModal";

//card con drilling props

// eslint-disable-next-line no-unused-vars
const CardTurno = ({ ...props }) => {
  const [isLatgerThan768] = useMediaQuery("(min-width: 768px)");
  // eslint-disable-next-line react/prop-types
  const { especialidad, fechayhora, medico, estado, key, accion, descripcion, _id } = props;

  return (
    <Card key={key} w={isLatgerThan768 ? "30vw" : "70vw" }>
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
      <CardFooter bg="#FF686B"display="flex" gap="1em" justifyContent="space-between" alignItems="center" flexDirection={"column"} >
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
