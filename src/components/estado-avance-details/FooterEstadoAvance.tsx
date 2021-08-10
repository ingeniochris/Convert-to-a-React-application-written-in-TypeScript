import { Row, Col, Input, Button, Card } from "reactstrap";

const FooterEstadoAvance = () => {
  return (
    <Row>
      <Col md="4">
        <Input type="textarea" name="text" id="exampleText" />
      </Col>
      <Col sm="5">
        <Card className="p-1">
          <div className="d-flex justify-content-end">
            <Button color="info">
              <img
                src="https://img.icons8.com/glyph-neue/36/000000/paper.png"
                alt="paper"
              />
            </Button>
          </div>
        </Card>
      </Col>
      <Col sm="2">
        <Card className="p-1">
          <div className="d-flex justify-content-around">
            <Button color="info">
              <img
                src="https://img.icons8.com/windows/36/000000/printer-door-open.png"
                alt="print"
              />
            </Button>
            <Button color="info">
              <img
                src="https://img.icons8.com/windows/36/000000/save--v1.png"
                alt="save"
              />
            </Button>
          </div>
        </Card>
      </Col>
      <Col sm="1">
        <Card className="p-1">
          <div className="d-flex justify-content-around">
            <Button color="info">
              <img
                src="https://img.icons8.com/material-outlined/36/000000/close-pane.png"
                alt="close"
              />
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default FooterEstadoAvance;
