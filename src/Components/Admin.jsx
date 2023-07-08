import React from 'react'
import { useState } from 'react'
import Api from './Api';
const Admin = () => {
 let [data,updatedata]= useState({id:'', pwd:''});
 let [t,updatet]=useState(false);
 let change=(e)=>
 {
   updatedata({...data,[e.target.name]:e.target.value});
 }
  return (
    <>
      <h1>Admin Panel</h1>
      {
        t===true?<>
        {/* <h1>Correct</h1> */}
        <button className='btn btn-primary' onClick={()=>{updatet(false)}}>Logout</button>
        <Api/>
        </>:<>
        ID:-<input type="text" name='id' value={data.id} onChange={change}/><br/> 
      Password:-<input type='password' name='pwd' value={data.pwd} onChange={change}/><br/>
      <button onClick={()=>{
        if(data.id==='admin'&&data.pwd==='12345')
       {
         updatet(true);
       }
       else
       {
         alert('Invalid id and Password');
       }
       }}>Login</button>
        </>
      }
   </>
  )
}

export default Admin