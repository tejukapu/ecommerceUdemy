import React, {useState} from 'react';
import {auth, fs} from '../Config/Config';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const SignUP = () => {

    const navigate =useNavigate();

    const [fullname, setFullname]=useState('');
    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('')
    const[successMsg, setSuccessMsg]=useState('')


    const HandleSubmit=e=>{
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password).then((credentials)=>{
          fs.collection('users').doc(credentials.user.uid).set({
            FullName:fullname,
            Email:email,
            password:password
          }).then(()=>{
            setSuccessMsg('Singup successfull you automatically redirected to Login page');
            setFullname('');
            setEmail('')
            setPassword('')
            setErrorMsg('');
            setTimeout(()=>{
              setSuccessMsg('');
              navigate('/login');
            },5000)
          }).catch((error)=>(
            setErrorMsg
          ))

        }).catch((error)=>{
          setErrorMsg(error.message)
    })
    }

  return (
    <>
      <div class="container" >
    <h2 className='my-4  mt-5' style={{color:"balck", fontFamily:"Bahnschrift", textShadow: "5px 5px 10px black", textDecoration: "underline"}}>SignUP</h2>
    {successMsg&&<> <div className='alert alert-success'>{successMsg}</div></>}
    <form onSubmit={HandleSubmit}>
      <div class="form-group">
        <label for="fullName" style={{color:"balck", fontFamily:"Bahnschrift"}}>Full Name:</label>
        <input type="text" class="form-control" id="fullName" placeholder="Enter your full name" 
        required 
        value={fullname}
        onChange={(e)=>setFullname(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label for="email" style={{color:"balck", fontFamily:"Bahnschrift"}}>Email:</label>
        <input type="email" class="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" required
        />
      </div>
      <div class="form-group">
        <label for="password" style={{color:"balck", fontFamily:"Bahnschrift"}}>Password:</label>
        <input type="password" class="form-control" id="password" value={password}
         onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" required/>

      </div>
      <button type="submit" class="btn btn-primary" 
      style={{fontFamily: "impact", fontSize:"20px"}}>Submit</button>
      <p className='mt-2'  style={{fontFamily:'Bahnschrift', fontSize: "20px"  }}>Already have an account--<Link to="/login">Login</Link></p>
    </form>

    {errorMsg&&<>
    <div className='alert alert-danger'>{errorMsg}</div></>}
  </div> 
    </>
  )
}
