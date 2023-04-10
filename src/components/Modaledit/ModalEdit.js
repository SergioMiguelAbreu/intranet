import React from "react";
import "./ModalEdit.css";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { toast } from 'react-toastify';

function EditModal(props) {
  // Campos que vou editart
  const [editValues, setEditValues] = useState({
    id: props.id,
    Nome: props.Nome,
    Email: props.Email,
    ContactoInterno: props.ContactoInterno,
    ContactoExterno: props.ContactoExterno,
    DepartamentoID: props.DepartamentoID,
  });

  

  //função para editart
  const handleEditContact = () => {
    console.log(editValues.id);
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      Nome: editValues.Nome,
      Email: editValues.Email,
      ContactoInterno: editValues.ContactoInterno,
      ContactoExterno: editValues.ContactoExterno,
      DepartamentoID: editValues.DepartamentoID,
    }).then((response) => {
      if (response.status === 200) {
        console.log(response);
        props.callback();
        toast.success('Contato editado com sucesso!'); // show success notification
      }
    });
    props.onHide();
  };

  //Trazer campos dos Inputs
  const handleChangeValues = (event) => {
    const { id, value } = event.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // Trazer lista para select
  const [options, setOptions] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/departs")
      .then((response) => {
        setOptions(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //Eliminar Função
  const handleDeleteContact = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data); // logs the response data
          props.callback(); // updates the contact list
          toast.success('Contato apagado com sucesso!'); // show success notification
        }
      })
      .catch((error) => {
        console.log(error); // logs any errors that occur during the delete request
      });
    props.onHide(); // hides the modal after the delete request is sent
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      callback={props.callback}
    >
      <Modal.Header closeButton>
        <h4 className="mb-0">Adicionar Contato</h4>
      </Modal.Header>
      <Modal.Body>
        <div className="d-grid">
          <Row>
            <Col md={12}>
              <label className="labelTitle">Nome do colaborador</label>
              <input
                className="inputBoxs"
                type="text"
                id="Nome"
                name="Nome"
                defaultValue={props.Nome}
                onChange={handleChangeValues}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <label for="email" className="labelTitle">
                Email do colaborador
              </label>
              <input
                className="inputBoxs"
                type="email"
                id="Email"
                name="Email"
                defaultValue={props.Email}
                onChange={handleChangeValues}
              />
            </Col>
            <Col md={6}>
              <label className="labelTitle">Contacto Interno</label>
              <input
                className="inputBoxs"
                type="text"
                id="ContactoInterno"
                name="ContactoInterno"
                defaultValue={props.ContactoInterno}
                onChange={handleChangeValues}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <label className="labelTitle">Contacto Externo</label>
              <input
                className="inputBoxs"
                type="text"
                id="ContactoExterno"
                name="ContactoExterno"
                defaultValue={props.ContactoExterno}
                onChange={handleChangeValues}
              />
            </Col>
            <Col md={6}>
              <label className="labelTitle">Departamento</label>
              <select
                name="DepartamentoID"
                id="DepartamentoID"
                value={editValues.DepartamentoID}
                className="optDeparts"
                onChange={handleChangeValues}
              >
                {options.map((option) => (
                  <option
                    key={option.idDepartamento}
                    value={option.idDepartamento}
                  >
                    {option.Nome}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btnEdit" onClick={handleEditContact} color="">
          Editar
        </button>
        <button
          className="btnDeleteContact"
          onClick={handleDeleteContact}
          color=""
        >
          Apagar
        </button>
        <button className="btnCancel" onClick={props.onHide}>
          Cancelar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
