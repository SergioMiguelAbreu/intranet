import CardContacts from '../../components/CardContacts/CardContacts';
import '../Contatos/contatos.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from '../../components/ModalAdd/ModalAdd';
import React from 'react';


function Contatos(props) {
    
    //variavel pra ver se o utilizador está logado para ver o botao Insert
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

  

    //ModalAddContact
    const [modalShow, setModalShow] = React.useState(false);
    // Devolve a lista atualizada qdo sofre updates no Modal
    const getData = () => { 
        Axios.get("http://localhost:3001/getCards").then((Response) =>{         
          setListPersons(Response.data);
        });
      }


    //Mostra-me a lista
    const [listPersons, setListPersons] = useState();
    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((Response) =>{ //console.log(Response.data)         
          setListPersons(Response.data);
        });
      }, []);



    const [search, setSearch] = useState("");

    // Filter the list based on the search query
    const filteredListPersons = listPersons?.filter((person) =>
        person.Nome.toLowerCase().includes(search.toLowerCase())
    );

    return ( 
        <div className="whiteColor">

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                backdrop="static"
                callback={getData}
            />


            <Container style={{maxWidth: '1700px'}}>
                <div className='d-flex justify-content-end mb-5 mt-5 '>
                    {loggedInUser && <button className='btnAddUser' onClick={() => setModalShow(true)}>Adicionar contato</button>}
                    <input className='btn-search' placeholder="Procurar contato" type="text" onChange={(e) => setSearch(e.target.value)} value={search}/>
                </div>
                <Row>
                        {filteredListPersons?.map((value) =>{
                            return(
                                    <CardContacts 
                                        key={value.ID} 
                                        listCard={listPersons} 
                                        id={value.ID}
                                        Nome={value.Nome}
                                        Email={value.Email}
                                        Departamento={value.Departamento}
                                        ContactoInterno={ value.ContactoInterno }
                                        ContactoExterno={ value.ContactoExterno }
                                        DepartamentoID={value.deptID}
                                        callback={getData}
                                    >
                                    </CardContacts>
                                );
                        })}
                </Row>
            </Container>
        </div>
     );
}

export default Contatos;