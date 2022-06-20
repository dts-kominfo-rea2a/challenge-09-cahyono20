// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
          <h1 className='header'>Call a Friend</h1>
          <span>Your Friendly Contact App</span>
          <p className='star'>**********************************************************************</p>
        </>
    )
}

export default Header;