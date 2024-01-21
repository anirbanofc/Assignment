import React, { useState } from 'react'

function Form() {
    let [data, setdata] = useState({
        name:"",email:""
    });
    let changetask = ({ target: { name,value } }) => {
    
        setdata({...data,[name]:value})
        console.log(data);
    }
    let sendData=(e)=>
    {
        e.preventDefault();
        console.log(data)
        
    
    }
  return (
    <div>
    <form onSubmit={sendData}>
    <input placeholder="Search"></input> <button> Search </button></form>
    <hr/>
    <input type='text' placeholder='name' name='name' onChange={changetask}></input>
    <input type='email' placeholder='email' name='email' onChange={changetask}></input>
    <input type='submit' onClick={sendData}></input>

    { <h3> fullname :{`${data.name}` } email:{`${data.mail}`}</h3>}
    </div>  
    
    )
}

export default Form