import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
const Home = () => {
  let[data,updatedata]=useState([]);
  useEffect(()=>{
    async function show()
    {
      let res=await axios.get('http://ppvj.pythonanywhere.com/product/');
      updatedata(res.data);
    }
    show();
  },[data])
  return (
    <>
    <h1>Home Component Is Running</h1>
    <div className='container-fluid'>
      <div className='row'>
    {data.map((v,i)=>{
      return <div className='col-sm-4'>
      <Card name={v.name} price={v.price} cat={v.cat} cmp={v.cmp}/>
      </div>
    })}
   </div>
    </div>
    </>
  )
}
export default Home