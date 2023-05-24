import React, {useState, useEffect} from 'react';
import { Products } from './Products';
import {auth, fs} from "../Config/Config";
import { Navbar } from './Navbar';

export const Home = () => {

  //getting current user function
  function GetCurrentUser(){
    const[user, setUser]=useState(null);
    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if (user){
          fs.collection('users').doc(user.uid).get().then((snapshot)=>{
            setUser(snapshot.data().FullName);
          })
        }
      })
    })
    return user;
  }

  const user=GetCurrentUser();
  console.log(user);

  return (
    <div>
        <Navbar user={user}/>
        <Products/>
    </div>
  )
}

