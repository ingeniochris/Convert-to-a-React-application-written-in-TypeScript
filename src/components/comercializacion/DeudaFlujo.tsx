import {
  Label,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const DeudaFlujo = () => {
  return (
    <Container>
      <Row>
        <Col sm="3"></Col>
        <Col sm="9" className="d-flex justify-content-end">
          <Col sm="6">
            <Label>Deuda "(Cred. Propuesto + Carga Financiera)"</Label>
          </Col>
          <Col sm="3">
            <Input type="text" value="56226.52" />
          </Col>
        </Col>
      </Row>
      <Row>
        <Col sm="3"></Col>
        <Col sm="9" className="d-flex justify-content-end">
          <Col sm="6">
            <Label>Flujos Ajustados</Label>
          </Col>
          <Col sm="3">
            <Input type="text" value="101310.00" />
          </Col>
        </Col>
      </Row>
      <Row>
        <Col sm="3"></Col>
        <Col sm="9" className="d-flex justify-content-end">
          <Col sm="6">
            <Label>Relación flujo ajustado deuda</Label>
          </Col>
          <Col sm="3">
            <InputGroup>
              <Input type="text" value="1,80" />
              <InputGroupAddon addonType="append">
                <InputGroupText>veces</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default DeudaFlujo;
