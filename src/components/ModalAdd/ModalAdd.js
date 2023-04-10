import React from 'react';
import './ModalAdd.css';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import { useState, useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';


function MyVerticallyCenteredModal(props) {

    // Guarda informação inserida no input
    const [values, setValues] = useState();                  
    const handleChangeValues = (value) =>{                  
        setValues((prevValue) => ({ 
          ...prevValue,
          [value.target.name]: value.target.value,
         }));
      };
      

      const handleClickButton = () => {
        //Botão tráz informação
        Axios.post('http://localhost:3001/register', {
          Nome: values.Nome,
          Email: values.Email,
          Departamento: values.Departamento,
          ContactoInterno: values.ContactoInterno,
          ContactoExterno: values.ContactoExterno,
        }).then((response) => {
          if (response.status === 200) {
            //console.log(response); // manda-me a lista
            props.callback();
            toast.success('Contato adicionado com sucesso!'); // show success notification
          }
        });
        props.onHide();
      };


      const [options, setOptions] = useState([]);

            useEffect(() => {
            async function fetchData() {
                const response = await Axios.get('http://localhost:3001/departs');
                //console.log(response.data); // log the response data to the console
                setOptions(response.data);
            }

            fetchData();
            }, []);

     

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        callback={props.callback}
      >
        <Modal.Header closeButton>
          <h4 className='mb-0'>Adicionar Contato</h4>
        </Modal.Header>
        <Modal.Body>
            <div className='d-grid'>
                <Row>
                    <Col md={12}>
                        <label className='labelTitle'>Nome do colaborador</label>
                        <input className='inputBoxs' type="text"  name="Nome" placeholder="Inserir nome" onChange={handleChangeValues} />
                    </Col>
                </Row>
                <Row>
                <Col md={6}>
                        <label for="email" className='labelTitle'>Email do colaborador</label>
                        <input className='inputBoxs' type="email"  name="Email" placeholder="Inserir email" onChange={handleChangeValues}/>
                    </Col>
                    <Col md={6}>
                        <label className='labelTitle'>Contacto Interno</label>
                        <input className='inputBoxs' type="text"  name="ContactoInterno" placeholder="Inserir contacto interno" onChange={handleChangeValues}/> 
                    </Col>
                </Row>
                <Row>
                <Col md={6}>
                        <label className='labelTitle'>Contacto Externo</label>
                        <input className='inputBoxs' type="text"  name="ContactoExterno" placeholder="Inserir contacto Externo" onChange={handleChangeValues}/> 
                    </Col>
                    <Col md={6}>
                        <label className='labelTitle'>Departamento</label>
                        <select name="Departamento" className='optDeparts' onChange={handleChangeValues}>
                            {options.map((option) => (
                                <option key={option.Nome} value={option.idDepartamento}>
                                {option.Nome}
                                </option>
                            ))}
                        </select>
                    </Col>
                </Row>
                
            </div>
        </Modal.Body>
        <Modal.Footer>
            <button className='btnSave' onClick={() => handleClickButton()}>Registar contato</button>
            <button className='btnCancel' onClick={props.onHide}>Cancelar</button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal;
  