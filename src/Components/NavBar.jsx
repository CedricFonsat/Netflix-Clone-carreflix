import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const token = sessionStorage.getItem('token');
      console.log(token);
  
      if (token) {
          console.log("gggggg");
      }else{
          console.log('noob');
      }

  const HandleClick = ()=> {
    sessionStorage.clear();
  }  

  return (
    //   basculer la nav en full black opacty 1 className={window.location.heigth == "100px"? "ggg" : "gg"}>
      <nav>
          <h1><img src="./assets/img/logo.png" alt="logo" />CarréFlix</h1>
{token ?           <ul>
              <li>Accueil</li>
              <li>Films</li>
              <li>Séries</li>
          </ul> : ""}
          <Link to="/login">{
            token ? <p className='btn_login'onClick={HandleClick} >Se deconnecter</p> : <p className='btn_login'>Se connecter</p>
          }</Link>
      </nav>
  )
}

export default NavBar