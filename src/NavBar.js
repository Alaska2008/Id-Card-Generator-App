import React from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-flex",
    width: "8rem",
    padding: "12px",
    margin: "0 6px 6px",
    background: "green",
    textDecoration: "none",
    color: "white",
  };
function NavBar() {

    return(
        <div className='NavBar'>
            <NavLink to ="/" exact style={linkStyles} activestyle={{ background: "darkblue",}} >
                Home
            </NavLink>

            <NavLink to="/about" exact style={linkStyles} activeStyle={{ background: "darkblue",}} >
                About
            </NavLink>
            
                <NavLink clas to="/login" exact style={linkStyles} activeStyle={{ background: "darkblue",}} >
                    Login
                </NavLink>
            
      
        </div>
    );
}
export default NavBar;