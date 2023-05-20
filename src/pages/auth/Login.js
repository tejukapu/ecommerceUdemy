import React, {useState} from 'react';
import "./Login.css"


export const Login = () => {
  const [password, setPassword]=useState('');
  const [email,setEmail]=useState();

  const handleSubmitButton =(e)=>{
    e.preventDefault();
    setEmail()
  }
  return (
    <div className='login'>
      <form onSubmit={{handleSubmitButton}}>
        <div className='email'>
           <input className='email' value={email} type="email" onChange={(e) =>setEmail
            (e.target.value)} placeholder='Enter Email hear'></input><br></br>
        </div>
        <div className='password'>
                   <input className='password' type="password" value={password} 
        onChange={(e)=>setPassword(e.target.value)}
         placeholder='Enter your password'></input><br></br>
        </div>
        <div className='Login'>
            <button type="submit" className='buttonLogin' onSubmit={handleSubmitButton}>
          Login
        </button>
        </div>
      </form>
    </div>
  )
}

export default Login;