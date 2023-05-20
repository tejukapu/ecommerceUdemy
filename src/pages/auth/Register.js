import React ,{ useState} from "react";
import "firebase/compat/auth";
import auth from "../../firebase";

import "./Register.css"
import {toast} from "react-toastify";



export const Register =()=>{
  const[email, setEmail] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const config ={
      url : `${process.env.REACT_APP_REGISTER_REDIRECT_URL}`,
      handleCodeInApp: true,  
    };

    await auth.sendSignInLinkToEmail(email,config);
    toast.success(
      `Email is sent to ${email} cllick the link to complete your registration.`);
      window.localStorage.setItem("emailForRegistration", email);
      setEmail("");
  };

  return(
    <div className="container">
    <form onSubmit ={handleSubmit}>
       <h4 className="title">Register</h4>
    <input type="email"
    value={email}
    className="formcontrol"
    onChange={(e)=> setEmail(e.target.value)}
    autoFocus />

    <button type ="submit" 
    className="button">Register</button>
    </form>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4 className="verify">("enter your email to verify ")</h4>
         
        </div>
      </div>
    </div>
  );
};

export default Register;





