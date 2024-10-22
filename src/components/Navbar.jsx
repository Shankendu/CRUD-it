import "./navbar.css"
import logo from "../assets/logo.png"
import {NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar-container">
        <NavLink to="/" className="logo-container">
            <img src={logo} alt="logo" />
            <h2>CRUD it</h2>
        </NavLink>
        <div className="nav-links">
                <NavLink to="/" className="link">Home</NavLink>
                <NavLink to="/create" id="create" className="link">Create User</NavLink>
        </div>
    </div>
  )
}

export default Navbar
