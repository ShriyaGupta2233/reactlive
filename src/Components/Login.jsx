import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import Signup from "./SignUp";
import store from "../Store";
import counterSlice from "../CounterSlice";
import {login,logout} from '../CounterSlice';
export default function Login() {
  const [data, setdata] = useState({email:'',password:''});

  // const nav=useNavigate()

  function change(e){
    setdata({...data,[e.target.name]: e.target.value})
  }

  function show()
  {
      //alert(data.email);
      store.dispatch(login(data.email));
  }
  // useEffect(() => {
  //   async function logins() {
  //     let res = await axios.get(`https://ppvj.pythonanywhere.com/emps//`);
  //     setdata(res.data);
   
  //   }
  //   logins();
  // }, [data]);

  const submit=(e)=>{
    e.preventDefault()
    async function login(){
      let res = await axios.get(`https://ppvj.pythonanywhere.com/emps/`)
      res=await res.data
      let c=0

      for (var i of res){
        if (data.email===i.email && data.password===i.password){
          c++
          break;
        }
      }
      if(c===0){
        alert(`invalid email or password`)
      }
      else{
          alert('success')
          //show();
      }

    }
    login()

  }


  return (
    <>
      <h1>Login Page</h1>

      <form id="login" >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={data.email}
            name="email"
            onChange={change}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={data.password}
            onChange={change}
            name="password"

          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={submit}>
          Login
        </button>
      </form>
      <br></br>
</>
);
}
