import React from 'react'
import logo from '../assets/logo.png'
import Button from './Button'
import '../css/Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="logo" />
                <div className="search-container">
                    <input type="text" placeholder='Procure por nome ou ID' />
                    <Button label={'Search'} />
                </div>
            </nav>
        </header>
    )
}

export default Header