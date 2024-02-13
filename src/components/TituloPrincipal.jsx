import { Container } from "react-bootstrap";

const TituloPrincipal = (props) => {
    return (
    <Container fluid>
      <h1>Hello {props.texto}!</h1>
    </Container>
    );
};

export default TituloPrincipal;