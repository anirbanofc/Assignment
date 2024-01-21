import React, { useEffect, useState } from 'react';
import Style from '../css/List.module.css'


function ListDesign({heading,des,id,click,setstate}) {
    let style=
    {
        color:"red"
    }
    function Toggle()
    {
      setstate(id)
      if(click===id)
      {
        
        setstate(-10)
      }  
    }
    
    
    return (
        <>
        <div className={Style.child} onClick={Toggle}>
            {click==id?<h1 style={style}>{id}.</h1>:<h1>{id}.</h1>}
          { click==id?<h2 style={style}>{heading}</h2>
          : <h2>{heading}</h2>}
            <button onClick={Toggle}>{click==id?"Show Less":"Show More"}
            </button>
            </div>
            {click==id&&<p>{des}</p>}
            <hr/>
        </>
    );
}

export default ListDesign;