import { Row, Col, Label, Input, InputGroup } from "reactstrap";

const HeaderInfo = () => {
  return (
    <Row className="p-3">
      <Col sm="5">
        <InputGroup>
          <Label className="p-2">Cliente</Label>
          <Input type="text" value="PATERNO MATERNO NOMBRES" />
        </InputGroup>
      </Col>
      <Col sm="2">
        <InputGroup>
          <Label className="p-2">Rut</Label>
          <Input type="text" value="85.237.600-7" />
        </InputGroup>
      </Col>
      <Col sm="5">
        <InputGroup>
          <Label className="p-2">N. Proyecto</Label>
          <Input type="text" value="CONJUNTO SOL DEL VALLE" />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default HeaderInfo;
