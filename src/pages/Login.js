import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  //const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [noob, setNoob] = useState('');
  const navigate = useNavigate();

   async function handleSubmit(e) {
    e.preventDefault();
    const forms = {
      email: email,
      password: password 
    }

    console.log(forms);



    axios
    .post(`http://localhost:3000/api/auth/signin`, forms)
    .then(resp => {
      console.log("resp => ", resp)
      if(resp !== ""){
        console.log("bienvenue");
        console.log(resp.data.token);
        navigate('/browse');

        const token = resp.data.token;
        sessionStorage.setItem('token',token);
      }
    
    })
    .catch((error) => {
      console.log('Error: ', error);
      setNoob(error);
    });



}

 

//  {noob ? <p className="error_login">NOOB t'es pas co</p> : "" } 


  return (
    <div className="login">
        <form onSubmit={handleSubmit}>
        <h1>Login tes null</h1>
          <div className="textbox">
            <input type="email" placeholder="Username" onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div className="textbox">
            <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
          </div>
          <button type="submit">LOGIN</button>
          <Link to="/">
            <p>Vous avez déjà un compte?</p>
          </Link>
        </form>
    </div>
  );
};

export default Login;
