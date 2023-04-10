import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


//se nao tiver user logado no url deixa navegar mas só mostra a pagina sem os componentes que só quem está logado tem perimissão 
function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const navigate = useNavigate();

    useEffect(() => {
      const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
      if (!loggedInUser) {
        navigate('/');
        sessionStorage.removeItem('loggedInUser');
      }
    }, [navigate]);
    

    return <Component {...props} />;
  }
}

export default withAuth;