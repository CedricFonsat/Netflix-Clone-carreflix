import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

  return (
    //   basculer la nav en full black opacty 1 className={window.location.heigth == "100px"? "ggg" : "gg"}>
      <nav>
          <h1><img src="./assets/img/logo.png" alt="logo" />CarréFlix</h1>
          <ul>
              <li>Accueil</li>
              <li>Films</li>
              <li>Séries</li>
          </ul>
          <Link to="/login"><p className='btn_login'>Se connecter</p></Link>
      </nav>
  )
}

export default NavBar