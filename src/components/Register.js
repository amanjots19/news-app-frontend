import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registeremail, setRegisteremail] = useState("");
  const history = useHistory();
  const register = () => {
    Axios({
      method: "POST",
      data: {
        name: registerUsername,
        email: registeremail,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/auth/registeration",
    }).then((res) => {
      if (res.data.success === true) {
        history.push("/login");
      }
    });
  };
  return (
    <div className="login-class">
      <div className = "login">
        <h1>Register</h1>
        <div>
          <input className="input-tag"
            placeholder="name"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </div>
        <div>
          <input className="input-tag"
            placeholder="email"
            onChange={(e) => setRegisteremail(e.target.value)}
          />
        </div>
        <div>
          <input className="input-tag"
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" onClick={register}>Submit</button>
        </div>
      </div>
    </div>
  );
};
