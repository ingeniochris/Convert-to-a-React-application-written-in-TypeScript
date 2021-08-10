import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Indices = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Indices</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup>
            <Label>Per. Const. (n)</Label>
            <Input type="text" value="12,00" />
          </FormGroup>
          <FormGroup>
            <Label>Interes (i)</Label>
            <Input type="text" value="10,00" />
          </FormGroup>
          <FormGroup>
            <Label>Rec. Pry (Rec)</Label>
            <Input type="text" value="6,00" />
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Indices;
