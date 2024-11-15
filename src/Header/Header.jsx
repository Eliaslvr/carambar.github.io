import React from 'react';
import image from "../img/carambar.webp"
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={image} alt='Logo' />
        </div>
    );
};

export default Header;