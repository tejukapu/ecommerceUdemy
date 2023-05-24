import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import shopping from "../images/shopping.png";
import "./Navbar.css";
import {Icon} from "react-icons-kit";
import {shoppingCart} from "react-icons-kit/feather/shoppingCart"
import { auth } from '../Config/Config';

export const Navbar = ({user}) => {

  const navigate = useNavigate();

   const handleLogout=()=>{
    auth.signOut().then(()=>{
      navigate('/login')
    })
   }
    return (
     

      <nav className="navbar">
      <div className="navbar-logo mt-0">
        
        <img src={shopping} alt="Logo" style={{width:"80px", height:"70px"}}/>
        
      </div>
      <div>

        {!user&&<>
          <ul className="navbar-links">
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </>}

        {user&&<>
             <ul className="navbar-links mt-3">
            <li>
              <Link to="/">{user}</Link>
            </li>
            <li>
              <Link to="/cart">
                  <Icon icon={shoppingCart} size={20}></Icon>
              </Link>
            </li>
            <div className='button'>
             <li>
              <button className='' onClick={handleLogout}  style={{borderRadius:"7px", }}>LOGOUT</button>
            </li>

            </div>
          </ul>
        </>}

      </div>
    </nav>
    )
}