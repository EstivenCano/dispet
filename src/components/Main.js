import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Tarjeta from './jsx/Tarjeta';
import Horario from './jsx/Horario';

class Main extends Component {

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <Container>
          <Row className="mt-2" style={{ display: "flex"}}>
            <Col md={{size:6}} sm={{size:6}}
            style={{ flex: 1, margin: 3, display: "flex", flexDirection: "column"}}>
            <Tarjeta
              style={{ flex: 1 }}
              color="warning"/>
          </Col>
          <Col md={{size:6}} sm={{size:6}}
          style={{ flex: 1, margin: 3, display: "flex", flexDirection: "column"}}>
            <Horario
              color="primary"
              style={{ flex: 1 }}
            />
          </Col>
          </Row>
        </Container>
      </div >


    );
  }
}

export default Main;