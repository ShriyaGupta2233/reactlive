import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contant from './Components/Contant'
import Admin from './Components/Admin'
import Login from './Components/Login'
import Logout from './Components/Logout'
import SignUp from './Components/SignUp'
import store from './Store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { useSelector } from 'react-redux'
const App = () => {
  store.subscribe(()=>{console.log(store.getState())});
  let user=useSelector((state)=>state.counter);
  return (
    <>
    <h1>App Component is Running</h1>
    <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">

<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#Home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#About">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Service">Service</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Admin">Admin</a>
      </li>
      {user===''?<><li className="nav-item">
        <a className="nav-link" href="#SignUp">SignUp</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Login">Login</a>
      </li></>:<><li className="nav-item">
        <a className="nav-link" href="#Logout">Logout</a>
      </li></>}
      
    </ul>
  </div>
</nav>

<div id="Home" className="container-fluid bg-success text-white" style={{"padding":"100px 20px;"}}>
<h1>Home</h1>
<Home/>
</div>
<div id="About" className="container-fluid bg-warning" style={{"padding":"100px 20px;"}}>
  <h1>About</h1>
<About/>
</div>
<div id="Contact" className="container-fluid bg-secondary text-white" style={{"padding":"100px 20px;"}}>
  <h1>Contact</h1>
<Contant/>
</div>
<div id="Service" className="container-fluid bg-secondary text-white" style={{"padding":"100px 20px;"}}>
  <h1>Service</h1>
<Service/>
</div>
<div id="Admin" className="container-fluid bg-secondary text-white" style={{"padding":"100px 20px;"}}>
  <h1>Admin</h1>
<Admin/>
</div>
<div id="SignUp" className="container-fluid bg-secondary text-white" style={{"padding":"100px 20px;"}}>
  <h1>SignUp</h1>
<SignUp/><br/>
</div>
<div id="Login" className="container-fluid bg-secondary text-white" style={{"padding":"100px 20px;"}}>
  <h1>Login</h1>
<Login/><br/>
</div>

</body>
    </>
  )
}

export default App