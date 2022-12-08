import React, {useState} from "react";
import "./navbar.css";

function Navbar () {
  const [active, setActive] = useState('nav_menu');
  const [toggleIcon, setToggleIcon] = useState('nav_toggler');

  const navToggle = () => {
    active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

    toggleIcon === 'nav_toggler'
      ? setToggleIcon('nav_toggler toggle')
      : setToggleIcon('nav_toggler');
};

  
  
  return (
    <>
      <div id="header">
        <div className="container">
          <nav className="nav">
           <a href="#" className="nav_brand">FORT<span>Dev.</span></a>
            <ul className={active}>
              <li className="nav_item">
                <a href="#" className="nav_link">Portfolio</a>
              </li>
              <li className="nav_item">
                <a href="#specialize" className="nav_link">Specialization</a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">About</a>
              </li>
              <li className="nav_item">
                <a href="#projects" className="nav_link">Projects</a>
              </li>
              <li className="nav_item">
                <a href="#testimony" className="nav_link">Testimonies</a>
              </li>
              <li className="nav_item">
                <a href="#trusted" className="nav_link">Trusted Client</a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">Contact</a>
              </li>
            </ul>
            <div onClick = {navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
               <div className="line3"></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
