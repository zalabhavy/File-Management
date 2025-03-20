import React from "react";
const NavigationComponent = () =>
{
    return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <a className="navbar-brand ms-5" href="/">File-Management System</a>

         <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item mx-2">
            <a className="btn btn-outline-primary me-2" href="/login" type="button">
          Login
        </a>
            </li>
            <li className="nav-item">
            <a className="btn btn-outline-success me-2" href="/register" type="button">
          Register
        </a>
            </li>
         </ul>
       </nav>
    )
}
export default NavigationComponent;