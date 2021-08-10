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
    CardFooter
  } from "reactstrap";
import classnames from "classnames";

import {HeaderInfo, TabHeader, TableEstadoAvance, FooterEstadoAvance} from '../components/index';

const EstadoAvance = () => {
  const [activeTab, setActiveTab] = useState<string>("1");
  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container fluid="md" className="pt-1">
        <Card>
        <CardHeader>
          <h3>Detalle de Estado de Avance </h3>
        </CardHeader>
        <Card className="m-1">
          <HeaderInfo/>
        </Card>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Estado de Avance
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Other Tab
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
             <Card className="m-1 p-2">
                  <Card><TabHeader/></Card>
                  <TableEstadoAvance/>
             </Card>
            </TabPane>
          </TabContent>
        </CardBody>
        <CardFooter>
          <FooterEstadoAvance/>
        </CardFooter>
        </Card>
    </Container>    
  );
};

export default EstadoAvance;
