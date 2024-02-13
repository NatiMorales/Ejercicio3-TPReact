import { Button, Container } from "react-bootstrap";
import { useState } from "react";

const TituloPrincipal = (props) => {
    const [clave,setClave]=useState("");
    return (
    <Container fluid>
      <h1>Hello {props.texto} {clave}!</h1>
      <button className="border" onClick={()=>setClave("(from changed state)")}>Click me</button>
    </Container>
    );
};

export default TituloPrincipal;