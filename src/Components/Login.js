import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Config/Config';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();


    const[email, setEmail]=useState('')
    const[password,setPassword]=useState('')

    const [errorMsg, setErrorMsg]=useState('');
    const[successMsg, setSuccessMsg]=useState('');

    const HandleSubmit =e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(()=>{
          setSuccessMsg("Login succesfull Your redirected to Home page in 5 seconds")
          setEmail('');
          setPassword('');
          setErrorMsg('');
          setTimeout(()=>{
            setSuccessMsg('');
            navigate('/');
          },5000)
        }).catch((error)=>{
          setErrorMsg(error.message);
        });
    };

  return (
    <>
     
    <div class="container"  >
    <h2 className='my-4  mt-5 ' style={{ fontFamily:"Bahnschrift", textShadow: "5px 5px 10px black", textDecoration: "underline"}}>Login</h2>
    <br></br>
     {successMsg&&<> <div className='alert alert-success'>{successMsg}</div></>}
    <form onSubmit={HandleSubmit}>
      <div class="form-group">
        <label for="email" style={{ fontFamily:"Bahnschrift"}}>Email:</label>
        <input type="email" class="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" required
        />
      </div>
      <div class="form-group">
        <label for="password" style={{ fontFamily:"Bahnschrift"}}>Password:</label>
        <input type="password" class="form-control" id="password" value={password}
         onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" required/>

      </div>
      <button type="submit" class="btn btn-primary" style={{fontFamily:"Bahnschrift"}}>Login</button>
      <br></br>
      <p className='mt-2'  style={{fontFamily:'Bahnschrift', fontSize: "20px" }}>Dont have an account--<Link to="/signup">SignUP</Link></p>
    </form>
    {errorMsg&&<>
    <div className='alert alert-danger'>{errorMsg}</div></>}
 
  </div> 
    
    </>
  )
}
