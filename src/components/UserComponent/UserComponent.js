import React from "react";
import './UserComponent.css';
import Dropdown from 'react-bootstrap/Dropdown';
//import { getLoggedInUser } from '../Contexts/auth';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ButtonOut from "../LogOutButton/ButtonOut";

function UserComponent(props) {

  function logOutCallBack() {
    setLoggedInUser(null)
  }

  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(sessionStorage.getItem("loggedInUser"))
  );
  const location = useLocation();

  useEffect(() => {
    const newLoggedInUser = location.state?.loggedInUser;
    if (newLoggedInUser) {
      setLoggedInUser(newLoggedInUser);
    } else {
      setLoggedInUser(JSON.parse(sessionStorage.getItem("loggedInUser")));
    }
  }, [location.state]);

    return ( 

<div>
      {loggedInUser && (
        <Dropdown>
        <Dropdown.Toggle className="teste">
            <small>Bem vindo/a, {loggedInUser.name}</small>
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <ButtonOut callback={logOutCallBack}/>
        </Dropdown.Menu>
        </Dropdown>
        )}
    </div>
  );
}


export default UserComponent;