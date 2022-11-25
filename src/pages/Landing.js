import React from 'react'
import NavBar from '../Components/NavBar'
import Button from '../Components/Button'

const Landing = () => {

// const HandleClick = () => {
//     const token = sessionStorage.getItem('token');
//     console.log(token);

//     if (token) {
//         console.log("gggggg");
//     }else{
//         console.log('noob');
//     }
// }

  return (
    <div>
        <NavBar/>
        <div className='landing'>
        <div className="landing_background">uu</div>
        <h1>Films, séries TV et bien plus <br /> encore.</h1>
        <p className='landing_p1'>Où que vous soyez, tenez vous au courant des dernieres nouveautés.</p>
        <p>Prêt pour l'actu ciné ? Saisissez votre adresse e-mail pour vous inscrire.</p>
        <div className="landing_register">
            <input type="text" />
            <Button name="Commencer &#x2794; " className="landing_button"/>
        </div>
        {/* <button onClick={HandleClick}>click</button> */}
        </div>
    </div>
  )
}


export default Landing