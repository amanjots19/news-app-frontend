import React , {useState} from 'react'
import Axios from 'axios'
import { Redirect,useHistory} from "react-router-dom";

export const Login = () =>{
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    let history = useHistory();
    const login = () => {
      Axios({
        method: "POST",
        data: {
          email: loginEmail,
          password: loginPassword,
        },
        withCredentials: true,
        url: "http://localhost:5000/auth/login",
      }).then((res) => {
         if(res.data.success === true){
             sessionStorage.setItem('user',res.data.email);
             return history.push('/news')
         }
    });
    };
    return (
      <div className="login-class">
        <div className = "login">
          <h1>Login</h1>
          <div className="input-tag">
          <input
            placeholder="email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          </div>
          <div>
          <input className="input-tag"
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          </div>
          <div className="button-tag">
          <button className="btn" onClick={login}>Login </button>
          </div>
          <div className="button-tag"> 
          <button className="btn" onClick = {()  => history.push('/registeration')}>Register</button>
          </div>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </div>
    );
  }