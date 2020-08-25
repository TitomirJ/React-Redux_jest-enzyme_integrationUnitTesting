import React from "react";
import './header.scss'
import Logo from '../../assets/images/flooop.png'

const Header = (props) => {
    return (
        <header data-test='headerComponent'>
            <div className='wrapper'>
                <div className='logo'>
                    <img data-test='logoIMG' src={Logo} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header