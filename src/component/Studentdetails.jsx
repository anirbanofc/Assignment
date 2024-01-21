import React, { useState } from 'react'
import style from "./output.css"

export default function Studentdetails() {
    let [fdata,setFdata]=useState({fn:'',ln:'',mobile:'',email:''})
    let [issbool,setIsbool]=useState(true);

    let updateFdata=({target:{name,value}})=>
    {
        setFdata({...fdata,[name]:value})
        setIsbool(true)
        // console.log(e.target.name)
    }
    let sendData=(e)=>
    {
        e.preventDefault();
        console.log(fdata)
        bool()
    }
    let bool=()=>{
        setIsbool(false)
    }
  return (
    <div className='StudentData'>
           
           <br />
           <form action="" onSubmit={sendData}>
                <input type="text" name='fn' placeholder='First Name'  onChange={updateFdata} />
                
                <input type="text" name='ln' placeholder='Last Name' onChange={updateFdata} />
               
                <input type="text" name='mobile' placeholder='Mobile Number' onChange={updateFdata} />
                
                <input type="email" name='email' placeholder='Email' onChange={updateFdata} />
                <input type="Password" name='Password' placeholder='Password' onChange={updateFdata} />
                <button onClick={bool}>Submit</button>
                
           </form>
          { !issbool &&<> <h3>Full Name: {`${fdata.fn} ${fdata.ln}`}</h3><h3>Mobile Number: {fdata.mobile}</h3> <h3>Email: {fdata.email}</h3>  </>}
          {/* { !issbool && <h3>Mobile Number: {fdata.mobile}</h3> } */}
             
           
         </div>
  )
}