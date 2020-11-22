import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Col,
  Row,
  Input,
} from "reactstrap";
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

function CHorario1(event){
    firebase.database().ref('horario1').set(event.target.value);
  }
  
  function CHorario2(event){
    firebase.database().ref('horario2').set(event.target.value);
  }
  function CHorario3(event){
    firebase.database().ref('horario3').set(event.target.value);
  }
const ModalHorario = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Configuración
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Configuración
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Row>
                <Col md={{ size: 3 }}>
                  <Label>Comida 1: </Label>
                </Col>
                <Col md={{ size: 9 }}>
                  <Input
                    type="text"
                    name="horario1"
                    id="horario1"
                    placeholder="Ingresa la hora de la primer comida"
                    onChange={CHorario1}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col md={{ size: 3 }}>
                  <Label>Comida 2: </Label>
                </Col>
                <Col md={{ size: 9 }}>
                  <Input
                    type="text"
                    name="horario2"
                    id="horario2"
                    placeholder="Ingresa la hora de la segunda comida"
                    onChange={CHorario2}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col md={{ size: 3 }}>
                  <Label>Comida 3: </Label>
                </Col>
                <Col md={{ size: 9 }}>
                  <Input
                    type="text"
                    name="horario3"
                    id="horario3"
                    placeholder="Ingresa la hora de la tercer comida"
                    onChange={CHorario3}
                  />
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" onClick={toggle}>
            Aceptar
          </Button>{" "}
          <Button color="secondary" type="reset" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalHorario;
