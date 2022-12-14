import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpperNav from '../UpperNav/UpperNav';
import './NavBar.css'
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';


const NavBar = () => {
    const [navStatus, steNavOpen] = useState(false)
    const menuItems = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/blogs'>Blog</Link></li>
            <li><Link to='/about'>About Us</Link></li>
        </>
    )
    return (
        <div className='main-nav'>
            <UpperNav />
            <div className='nav-container'>
                <Link to='/'><h3>Alinar</h3></Link>

                <div className='menu-log-cart'>
                    <ul className='nav-items'>
                        {menuItems}
                    </ul>

                    <ul className='log-cart'>
                        <li><Link to='/login'><i className="fa-sharp fa-solid fa-user"></i></Link></li>
                        <li className='cart'><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link><span className='cart-length'>5</span></li>
                    </ul>
                </div>

                <div className='responsive-navBar'>
                    <div onClick={() => steNavOpen(!navStatus)} className='bars'>
                        {
                            navStatus ? <ImCross /> : <FaBars />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;