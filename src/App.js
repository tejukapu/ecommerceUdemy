import React from "react";

import {toast, ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";
import {Login} from "./pages/auth/Login";
import {Register} from "./pages/auth/Register";
import {Home} from "./pages/Home";
import {Header} from "./components/nav/Header";

import { Route, Routes } from "react-router-dom";


const App = ()=> {
  return (
    <div>
      <Header/>
      <ToastContainer/>
      <Routes>
        <Route path="register" element={<Register/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
  
}

export default App;
