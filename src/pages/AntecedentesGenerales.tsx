import React, { useState } from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  CardFooter
} from "reactstrap";
import classnames from "classnames";

// componentes
import {
  Indices,
  TableDescription,
  GarantiaDeuda,
  TableComercializacion,
  DeudaFlujo,
} from "../components/index";

const AntecedentesGenerales = () => {
  const [activeTab, setActiveTab] = useState<string>("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container fluid="md" className="pt-3">
      <Card>
        <CardHeader>
          <h3>Antecedentes Generales </h3>
        </CardHeader>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Var. G.-D.
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Comercialización
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row className="p-4">
                <Col sm="2">
                  <Indices />
                </Col>
                <Col sm="10">
                  <TableDescription />
                  <GarantiaDeuda />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row className="p-4">
                <Col sm="12">
                  <TableComercializacion />
                </Col>
              </Row>
              <Row>
                <Col>
                  <DeudaFlujo />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </CardBody>
        <CardFooter>
          <p>* Información histórica según solicitud</p>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default AntecedentesGenerales;
