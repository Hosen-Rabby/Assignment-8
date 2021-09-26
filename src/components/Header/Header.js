import React from 'react';

// attach css 
import './Header.css'
// logo import
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <div className = "header">
            <img src = {logo} alt='Book Logo' className = 'logo'/>
            <h3>The more you read the more you learn!</h3>
            <h3>Choose your best book from best collection</h3>
            <h4>Within $100</h4>
            <div className = 'menu'>
            <a href = '#'>Best Books</a>
            <a href = '#'>Best Writers</a>
            <a href = '#'>Best Price</a>
            </div>
        </div>
    );
};

export default Header;