import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <span class="navbar-brand mx-3 h1">Sal's Thread Blog App</span>
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/">
               Home
             </NavLink>
           </li>
         </ul>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
               Create Blog
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}