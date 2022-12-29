import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo2 from '../../../assets/logo2.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-link">
                    <img src={logo2} alt="" />

                    <div className="links">
                        <Link to='/about'>About Online Activities</Link>
                        <Link to='/blogs'>Read our blog</Link>
                    </div>

                    <div className="links">
                        <Link to='/shop'>Shop</Link>
                        <Link to='/signup'>Signup to deliver</Link>
                    </div>
                </div>

                <div className="copyright-privacy">
                    <p>Copyright &copy; {year} Alinar</p>

                    <div className="privacy">
                        <Link to='/termsAndPrivacy'>Privacy</Link>
                        <Link to='/termsAndPrivacy'>Term of use</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;