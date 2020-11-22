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

function CNombre(event){
  firebase.database().ref('nmascota').set(event.target.value);
}

function CImagen(event){
  firebase.database().ref('imagen').set(event.target.value);
}

const ModalMascota = (props) => {

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
                  <Label>Nombre: </Label>
                </Col>
                <Col md={{ size: 9 }}>
                  <Input
                    type="text"
                    name="nmascota"
                    id="nmascota"
                    placeholder="Ingresa el nombre de la mascota"
                    onChange={CNombre}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col md={{ size: 3 }}>
                  <Label>Imagen: </Label>
                </Col>
                <Col md={{ size: 9 }}>
                  <Input
                    type="text"
                    name="imagen"
                    id="imagen"
                    placeholder="Ingresa la URL de la imagen"
                    onChange={CImagen}
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

export default ModalMascota;
