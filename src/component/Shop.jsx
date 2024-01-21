import React from 'react';
import style from '../css/Nav.module.css'
import { Link, Outlet } from 'react-router-dom'


function Shop(props) {
    return (
        <div className={style.section}>

            <nav className={style.Navbar_child}>
                <Link className={style.Navbar_parent_a} to='Camera'><img height='200px' width='200px' src="https://media.croma.com/image/upload/v1686892279/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/267967_0_hr8uwe.png" alt="" /></Link>
                <Link className={style.Navbar_parent_a} to='HeadPhone'><img height='200px' width='200px' src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/Hesh-ANC_True-Black_S6HHW-N740_Hero_v001.jpg" alt="" /></Link>
                <Link className={style.Navbar_parent_a} to='Laptop'><img height='200px' width='200px' src="https://www.reliancedigital.in/medias/HP15s-EQ2144AU-Laptop-492575360-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjY1MDl8aW1hZ2UvanBlZ3xpbWFnZXMvaGI5L2hmYS85ODIyNTU4MzU1NDg2LmpwZ3w1NWUzY2EzYTNlM2YwM2FiMDJjODE3NzZlOTI2MzYzN2NhMjUxNDVlODkyZTc5MWI5ZmRlODc3N2VjY2UxNDIx" alt="" /></Link>
                <Link className={style.Navbar_parent_a} to='Mobile'><img height='200px' width='200px' src="https://www.sahivalue.com/product-images/14+pro+max.jpg/293890000021697778/400x400" alt="" /></Link>

            </nav>
            <div style={{ height: '600px', width: '600px', border: '1px solid red', marginLeft: '500px', marginTop: '100px' }}>
                <Outlet />
            </div>
        </div>
    );
}

export default Shop
