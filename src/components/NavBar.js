import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => (

  <ul>
    <li>
      <Link to="/" >Home</Link>
    </li>
    <li>
      <Link to="/article" >New Article</Link>
    </li>
    <li>
      <Link to="/journalist" >New Journalist</Link>
    </li>
  </ul>

)


export default NavBar;
