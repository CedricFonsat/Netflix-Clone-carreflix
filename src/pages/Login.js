import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {

  //const [login, setLogin] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [noob, setNoob] = useState('');
  const navigate = useNavigate();

   async function handleSubmit(e) {
    e.preventDefault();
    const forms = {
      username: username,
      password: password 
    }

    console.log(forms);

const token = "token";

     if(token !== ""){
        sessionStorage.setItem('token',token);
       navigate('/browse');
     }else{
       setNoob("t'es noob");
     }



// axios
// .post(`http://localhost:3000/api/auth/signin`, forms)
// .then(resp => {
//   console.log("resp => ", resp)
//   if(resp !== ""){
//     console.log("bienvenue");
//     console.log(resp.data.token);
//     navigate('/browse');

//     const token = resp.data.token;
//     sessionStorage.setItem('token',token);
//   }

// })
// .catch((error) => {
// console.log('Error: ', error);
// setNoob(error);
// });

}

 

//  {noob ? <p className="error_login">NOOB t'es pas co</p> : "" } 


  return (
    <div className="login">
        <form onSubmit={handleSubmit}>
     {noob ? <p className="error_login">NOOB t'es pas co</p> : "" } 
        <h1>Login tes null</h1>
          <div className="textbox">
            <input type="text" placeholder="Username" onChange={(e)=> setUsername(e.target.value)} />
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
