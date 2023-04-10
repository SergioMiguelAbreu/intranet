import "../CardContacts/CardContacts.css";
//import React, { Component } from 'react';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhoneAlt, FaUserEdit } from "react-icons/fa";
import EditModal from "../Modaledit/ModalEdit";
//import Axios from 'axios';
import React from "react";

const ICON_SIZE = 20;

function CardContacts(props) {
  const [modalShow, setModalShow] = React.useState(false);

  //variavel pra ver se o utilizador está logado para ver o botao Insert
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

  // se tiver dois contatos mostra | a dividir senao nao mostra nada.
  const { ContactoInterno, ContactoExterno } = props;
  const shouldRenderDivider = ContactoInterno && ContactoExterno;
  

  return (
    <>
      <EditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        backdrop="static"
        Nome={props.Nome}
        id={props.id}
        DepartamentoID={props.DepartamentoID}
        Email={props.Email}
        Departamento={props.Departamento}
        ContactoInterno={props.ContactoInterno}
        ContactoExterno={props.ContactoExterno}
        setListCard={props.setListCard}
        callback={props.callback}
      />
      <Col className="p-0 col-md-2-new">
        <div className="body-contacts">
          <div className="marginBottom30">
            <div className="d-flex justify-content-between">
              <h4 className="mb-0 titleName">{props.Nome}</h4>
              {loggedInUser && (
                <button
                  className="btnDelete"
                  onClick={() => setModalShow(true)}
                >
                  <FaUserEdit size={ICON_SIZE} className="icon" />
                </button>
              )}
            </div>
            <small className="txt-depart">{props.Departamento}</small>
          </div>
          <div className="colorBlack">
            <div className="d-flex mb-2 align-items-center">
              <FaEnvelope size={ICON_SIZE} className="icon" />
              <p className="colorBlack mb-0">{props.Email}</p>
            </div>
            <div className="d-flex">
              <FaPhoneAlt
                size={ICON_SIZE}
                className="icon align-items-center"
              />
              <p className="colorBlack mb-0" style={{ marginBottom: "0px" }}>
                {ContactoInterno}
                {shouldRenderDivider && ` | `}
                {ContactoExterno}
              </p>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default CardContacts;
