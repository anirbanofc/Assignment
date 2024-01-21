import React, { useEffect, useState } from 'react'
import css from "../css/output.css"
import axios from 'axios'
export default function Fakestore() {

    let [products, setproducts] = useState([])
    let [loader, Setloader] = useState(true)
    useEffect(() => {
        getdata()
        

    }, [])

    async function getdata() {
        let {data} = await axios.get("https://fakestoreapi.com/products")
        setproducts(data)
        Setloader(false)
    }
    return (
        <div>
        {loader && <span className='loader'></span>}
            

            {
                products.map(({ title, image, id }) => {
                    return (
                        <div key={id}>
                            <h1>{title}</h1>
                            <img src={image} height="250px" />
                        </div>
                    )
                })
            }
        </div>
    )
}