import React from 'react';
import './styles.scss'
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="headerComponent" data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="logoIMG" data-test="logoIMG" src={Logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}

export default Header;