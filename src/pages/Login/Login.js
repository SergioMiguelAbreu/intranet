import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from '../../components/Contexts/auth'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  //salvar o user logado no sessionstorage
  function saveLoggedInUser(userData) {
    sessionStorage.setItem("loggedInUser", JSON.stringify(userData));
  }


  function handleSubmit(event) {
    event.preventDefault();
    Axios.post("http://localhost:3001/login", { email, password })
      .then((res) => {
        if (res.data !== "Login Falhado") {
          // Store the logged-in user's information in session storage
          saveLoggedInUser(res.data);

          // Navigate to the homepage
          navigate("/", { state: { loggedInUser: res.data } });
          getLoggedInUser();
        } else {
          setError("Login falhado. Tente novamente.");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="h-100">
      <div className="d-flex justify-content-center align-items-center height100">
        <form className="formLogin" onSubmit={handleSubmit}>
            <div>
                <h4 className="mb-3">HFA Intranet</h4>
                <p className="titleLogin mb-5">Faça Login para descobrir outras funcionalidades</p>
            </div>
          <div>
            <input
              className="inputBoxs"
              type="email"
              autoComplete="username"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="inputBoxs"
              type="password"
              autocomplete="current-password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div><small>{error}</small></div>}
          <button className="btnEdit mt-3 w-100">Entrar</button>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
