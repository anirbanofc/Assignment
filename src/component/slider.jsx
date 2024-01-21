import React, { useState } from 'react'
import css from "../css/slider.css"

function Slider() {
    let imgarr=[
        "https://images.unsplash.com/photo-1595147389795-37094173bfd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1663047168154-d5425fd4d1e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]


    let [initial,setinitial]=useState(0)
    
let prvimg=()=>{

setinitial(initial-1)
console.log(initial);
if (initial==0) {
    setinitial(imgarr.length-1)
}
}

let nextimg=()=>{
    setinitial(initial+1)
    if(initial==imgarr.length-1){
        setinitial(0)
    }

}

    return (
    <div>
    <button onClick={prvimg}>Previous</button>
    <img src={imgarr[initial]} className='imgslider'/>
    <button onClick={nextimg}>next</button>

    
    </div>
  )
}

export default Slider