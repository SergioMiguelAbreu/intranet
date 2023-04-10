import React from "react";
import {
  FaSignOutAlt,
  FaThLarge,
  FaBars,
  FaUserFriends,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../style/sidebar.css";

const ICON_SIZE = 20;

function Navbar({ visible, show }) {
  
  // Check if the user is logged in
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

  return (
    <>
      <div className="btn-side">
        <button className="mobile-nav-btn" onClick={() => show(!visible)}>
          <FaBars size={24} />
        </button>
      </div>
      <nav className={!visible ? "navbar" : ""}>
        <div>
          <div className="links nav-top">
            <div style={{height: '20px'}}>
              <NavLink onClick={() => show(!visible)} to="/" className="nav-link">
                <FaThLarge size={ICON_SIZE} />
                <span>HomePage</span>
              </NavLink>
              <NavLink
                onClick={() => show(!visible)}
                to="/pages/Contatos"
                className="nav-link"
              >
                <FaUserFriends size={ICON_SIZE} />
                <span>Contatos </span>
              </NavLink>
            </div>
          </div>
        </div>

        {!loggedInUser && (
          <div className="links">
            <NavLink
              onClick={() => show(!visible)}
              to="/pages/Login/Login"
              className="nav-link"
            >
              <FaSignOutAlt size={ICON_SIZE} />
              <span>Login</span>
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
