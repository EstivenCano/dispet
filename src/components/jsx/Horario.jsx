import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import ModalHorario from "./ModalHorario";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDaCLIDZlBlJABIN8lPbqwmjeXxl5DWlA8",
  authDomain: "dispensador-41c37.firebaseapp.com",
  databaseURL: "https://dispensador-41c37.firebaseio.com/",
  projectId: "dispensador-41c37",
  storageBucket: "dispensador-41c37.appspot.com",
  messagingSenderId: "653727100418",
  appId: "1:653727100418:web:38e07e9b0fce7af040c11b",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

class Horario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horario1: "",
      horario2: "",
      horario3: "",
    };
  }

  componentWillMount() {
    const nmasRef = firebase.database().ref("horario1");
    nmasRef.on("value", (snapshot) => {
      this.setState({
        horario1: snapshot.val(),
      });
    });
    const imgRef = firebase.database().ref("horario2");
    imgRef.on("value", (snapshot) => {
      this.setState({
        horario2: snapshot.val(),
      });
    });
    const valimenRef = firebase.database().ref("horario3");
    valimenRef.on("value", (snapshot) => {
      this.setState({
        horario3: snapshot.val(),
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Card body inverse color={this.props.color}>
          <CardHeader tag="h3" color="black">
            Horario
          </CardHeader>
          <CardBody>
            <img src="https://www.pngkit.com/png/full/7-79272_clock-png-transparent-clock-with-transparent-background.png" className="img-fluid" alt="..." />
            <hr />
            <Row>
              <Col md={{ size: 12 }}>
                <CardTitle tag="h5">Comida 1: {this.state.horario1}</CardTitle>
              </Col>
              <Col md={{ size: 12 }}>
                <CardTitle tag="h5">Comida 2: {this.state.horario2}</CardTitle>
              </Col>
              <Col md={{ size: 12 }}>
                <CardTitle tag="h5">Comida 3: {this.state.horario3}</CardTitle>
              </Col>
            </Row>
          </CardBody>
          <ModalHorario />
        </Card>
      </React.Fragment>
    );
  }
}

export default Horario;
