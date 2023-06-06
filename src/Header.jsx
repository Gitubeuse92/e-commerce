import React from 'react'
import logo from "./img/logo.webp"
const Header = () => {
  return (
    <div>
        <img src={logo} alt="logo" />
        <ul>
            <li><a href="">ACCUEIL</a></li>
            <li><a href="">BOUTIQUE</a></li>
            <li><a href="">A PROPOS</a></li>
            <li><a href="">POINTS DE VENTE</a></li>
            <li><a href="">CONTACT</a></li>
            <li><a href="">COMPTE CLIENT</a></li>
        </ul>


    </div>
  )
}

export default Header