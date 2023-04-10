import React from 'react';
import { useNavigate } from 'react-router-dom';
//import withAuth from '../Contexts/withAuth';
import './ButtonOut.css'

function LogoutButton({callback}) {
  const navigate = useNavigate();

  function handleLogout() {
    // Remove the logged-in user's information from session storage
    sessionStorage.removeItem('loggedInUser');
    callback()
    // Navigate back to the login page
    navigate('/');
  }

  //verifica se o utilizador está logado
  const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

  return (
    <div>
      {loggedInUser && <button className='btn-out' onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default LogoutButton;