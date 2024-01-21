import React from 'react';
import {Link} from 'react-router-dom'
import style from '../css/Nav.module.css'

function NavDesign() {
    return (
        <nav className={style.Navbar_parent}>
            <Link className={style.Navbar_parent_a} to='/'>Home</Link>
            <Link className={style.Navbar_parent_a} to='/todousereducer'>Use reducer todo</Link>
            <Link className={style.Navbar_parent_a} to='/Movie'>Movie</Link>
            <Link className={style.Navbar_parent_a} to='/Slider'>Slider</Link>
            <Link className={style.Navbar_parent_a} to ='/Shop'>Shop</Link>
            <Link className={style.Navbar_parent_a} to ='/list'>Accordion</Link>
            <Link className={style.Navbar_parent_a} to ='/Fakestore'>Fakestore</Link>
            <Link className={style.Navbar_parent_a} to ='/Form'>Form</Link>
            <Link className={style.Navbar_parent_a} to ='/CustomHook'>Custom Hooks</Link>
      </nav>
    );
}

export default NavDesign;