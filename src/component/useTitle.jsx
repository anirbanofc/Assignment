import React, { useState } from 'react'
import { useEffect } from 'react'
export default function useTitle(Count) {

    return (
        <div>
            {document.title = `${Count} Time Clicked`}
            </div>
    )
}
//   {window.addEventListener("load", (event) => {
//                 if (navigator.onLine) {
//                     console.log("Online");
//                 }
//                 else (setOnline(false))

// console.log(setOnline);
                
//                 const statusDisplay = document.getElementById("status");
//                 console.log(navigator.onLine ? "Online" : "OFFline");
//                 console.log(navigator.OFFline ? "OFFline" : "Online");
//             })}