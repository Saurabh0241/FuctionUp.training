import React, { useState } from "react";
import Buttons from "../Atom/Buttons";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import Logo from "../Atom/Logo";
import { useNavigate } from "react-router-dom";




function Navbar() {
  const [value, setvalue] = useState(false);
  const navigation = useNavigate();

  function Handleclick() {
    setvalue(!value);
  }
  function handleClickLogin() {
    navigation("/login");
  }



  function handleClickRegister() {
    navigation("/register");
  }



  function handleClickAboutUs() {
    navigation("/aboutus");
  }

  return (
    <div className="parent">
      <div className="Child">
        <nav className="navbar">
          <Logo />
    
          <a href="/#">Home</a>
          <a  onClick={handleClickAboutUs}>About us</a>
          <a  onClick={handleClickLogin}> Login</a>
          <a onClick={handleClickRegister}>Regitration</a>
          <a href="/#">vidoes</a>

          <Buttons />
        </nav>
      </div>
      <AiOutlineMenu onClick={Handleclick} className="AiOutline" />
      {value && (
        <div className="navbar2">
          <ul>
            <ul>Home</ul>
            <a  onClick={handleClickAboutUs}>About us</a>
            <a  onClick={handleClickLogin}>Login</a>
            <a  onClick={handleClickRegister}>Registration</a>
            <a href="/#">vidoes</a>
            <a href="/#">Login</a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
