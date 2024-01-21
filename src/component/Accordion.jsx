import React from 'react'

export default function Accordion({id,que,detail,hide,setHide}) {
    let showData=()=>{
        
      }
        return (
          <div>
              <div>
              <h1>{que}</h1>
              <button onClick={showData}>{hide===id?"Hide":"Show"}</button>      
              </div>
              {hide===id && <p>{detail}</p>}
          </div>
        )
}
