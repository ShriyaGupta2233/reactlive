import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Api = () => {
  let[data,updatedata]=useState([]);
  let[product,updateproduct]=useState({id:'',name:'',price:0,cat:'',cmp:''});
  useEffect(()=>{
    async function show()
    {
      let res=await axios.get('http://ppvj.pythonanywhere.com/product/');
      updatedata(res.data);
    }
    show();
  },[data])
  const change=(e)=>{
    updateproduct({...product,[e.target.name]:e.target.value});
  }
  return (
    <>
    <div className='container-fluid'>
    <h1>APP Component is running</h1>
    <input type='number' name='id' value={product.id} onChange={change}/>
    <button className='btn btn-primary' onClick={()=>{
      async function searchpro()
      {
        try{
        let res=await axios.get(`http://ppvj.pythonanywhere.com/product/${product.id}/`);
        console.log(res.data);
        updateproduct(res.data);
        }catch(error)
        {
          console.log(error);
        }
      }
      searchpro();
    }}>Search</button>
    <h2>{product.id}  {product.name}  {product.price}  {product.cat}  {product.cmp}</h2>
    <table className='table table-bordered text-center bg-primary text-white'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v,i)=>{
          return (<tr key={i}>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.price}</td>
            <td>{v.cat}</td>
            <td>{v.cmp}</td>
            <td><button className='btn btn-danger' onClick={()=>{
             async function delpro()
             {
               let res=await axios.delete(`http://ppvj.pythonanywhere.com/product/${v.id}/`);
               if(res.status===204)
               {
                alert('product deleted successfully');
               }
             }
             delpro();
            }}>Delete</button></td>
            <td><button className='btn btn-warning' onClick={()=>{
              updateproduct(v);
            }}>Update</button></td>
          </tr>)
        })}
      </tbody>
    </table>
    <form onSubmit={(e)=>{
      e.preventDefault();
      
      if(product.id==='')
      {
        async function addpro()
      {
        let res=await axios.post('http://ppvj.pythonanywhere.com/product/',product);
        if(res.status===201)
        {
          alert('product added successfully');
          updateproduct({id:'',name:'',price:0,cat:'',cmp:''});
        }
      }
      addpro();
      }
      else
      {
        async function updatepro()
        {
          let res=await axios.put(`http://ppvj.pythonanywhere.com/product/${product.id}/`,product);
          if(res.status===200)
          {
            alert('product updated successfully');
            updateproduct({id:'',name:'',price:0,cat:'',cmp:''});
          }
        }
        updatepro();
      }
    }}>
     Name<input type='text' name='name' value={product.name} onChange={change} placeholder='please enter name' className='form-control'/>
     Price<input type='number' name='price' value={product.price} onChange={change} placeholder='please enter price' className='form-control'/>
     Category<input type='text' name='cat' value={product.cat} onChange={change} placeholder='please enter category' className='form-control'/>
     Company<input type='text' name='cmp' value={product.cmp} onChange={change} placeholder='please enter company' className='form-control'/>
     <button className='btn btn-primary'>{product.id===''?'Add product':'Update product'}</button>
    </form>
    </div>
    </>
  )
}
export default Api