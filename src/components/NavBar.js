import React from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";


class NavBar extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"grey",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Admin options </div>

          { this.state.displayMenu ? (
          <ul>
         <li><Link to="/" >Home</Link></li>
         <li><Link to="/article" >New Article</Link></li>
         <li><Link to="/journalist" >New Journalist</Link></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default NavBar;


//
// import React from "react";
// import {Link} from "react-router-dom";
//
// const NavBar = () => (
//
//
//   <ul>
//     <li>
//       <Link to="/" >Home</Link>
//     </li>
//     <li>
//       <Link to="/article" >New Article</Link>
//     </li>
//     <li>
//       <Link to="/journalist" >New Journalist</Link>
//     </li>
//   </ul>
//
// )
//
//
// export default NavBar;
