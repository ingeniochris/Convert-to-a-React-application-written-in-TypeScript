import {Link} from "react-router-dom";
import {Button, Container,Row,Col} from "reactstrap"
const Start = () => {
    return (
        <Container size="lg" className="p-5">
            <Row>
                <Col sm="12">
                <Link to="/antecedentes-generales"><Button color="primary" size="lg">Ejercicio A Y B</Button></Link>{' '}
                <Link to="/estado-avance"><Button color="warning" size="lg">Ejercicio C</Button></Link>
                
                </Col>
            </Row>
        </Container>
    )
}

export default Start
