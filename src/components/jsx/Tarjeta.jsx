import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Badge,
  Button,
} from "reactstrap";
import ModalMascota from "./ModalMascota";
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

class Tarjeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nmascota: "",
      valimen: 0,
      imagen: "",
      estado: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const nmasRef = firebase.database().ref("nmascota");
    nmasRef.on("value", (snapshot) => {
      this.setState({
        nmascota: snapshot.val(),
      });
    });
    const imgRef = firebase.database().ref("imagen");
    imgRef.on("value", (snapshot) => {
      this.setState({
        imagen: snapshot.val(),
      });
    });
    const valimenRef = firebase.database().ref("valimen");
    valimenRef.on("value", (snapshot) => {
      this.setState({
        valimen: snapshot.val(),
      });
    });
    const estadoRef = firebase.database().ref("estado");
    estadoRef.on("value", (snapshot) => {
      this.setState({
        estado: snapshot.val(),
      });
    });
  }

  handleClick() {
    // Changing state
    this.setState({
      estado: "activado",
    });
    firebase.database().ref("estado").set("activado");
  }

  render() {
    return (
      <React.Fragment>
        <Card body inverse color={this.props.color}>
          <CardHeader tag="h3" color="black">
            Mascota
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={{ size: 12 }}>
                <img src={this.state.imagen} className="img-fluid" alt="..." />
              </Col>
              <Col md={{ size: 12 }}>
                <br />
                <CardTitle tag="h4">{this.state.nmascota}</CardTitle>

                <CardText>
                  Veces alimentado:
                  <Badge style={{ backgroundColor: "black" }}>
                    {this.state.valimen}
                  </Badge>{" "}
                </CardText>
              </Col>
            </Row>
            <Button color="danger" onClick={this.handleClick}>
              Alimentar
            </Button>
          </CardBody>

          <ModalMascota />
        </Card>
      </React.Fragment>
    );
  }
}

export default Tarjeta;
