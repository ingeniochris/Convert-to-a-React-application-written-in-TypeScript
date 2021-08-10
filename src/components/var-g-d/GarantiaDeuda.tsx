import { Label, Input, Row, Col, Container } from "reactstrap";

const GarantiaDeuda = () => {
  return (
    <Container className="d-flex justify-content-center pt-2">
      <Row>
        <Col sm="3">
          <Label>Relación Garantía - Deuda (%)</Label>
        </Col>
        <Col sm="3">
          <Input type="text" value="5,38" />
        </Col>
        <Col sm="3">
          <Input type="text" value="1,63" />
        </Col>
        <Col sm="3">
          <Input type="text" value="2,46" />
        </Col>
      </Row>
    </Container>
  );
};

export default GarantiaDeuda;
