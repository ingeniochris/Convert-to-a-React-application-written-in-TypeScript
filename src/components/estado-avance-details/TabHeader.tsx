import { Row, Col, Label, Input, InputGroup } from "reactstrap";

const TabHeader = () => {
  return (
    <Row className="p-3">
      <Col sm="3">
        <InputGroup>
          <Label className="p-2">N° Avance</Label>
          <Input type="text" value="1" />
        </InputGroup>
      </Col>
      <Col sm="4">
        <InputGroup>
          <Label className="p-2">Fecha de Inspección</Label>
          <Input type="date" />
        </InputGroup>
      </Col>
      <Col sm="5">
        <InputGroup>
          <Label className="p-2">Moneda</Label>
          <Input type="text" value="U.F." />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default TabHeader;
