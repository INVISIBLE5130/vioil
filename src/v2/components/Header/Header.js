import React from "react";
import './Header.css'
import LogoSVG from '../../assets/logo.svg'
import {Link} from "react-router-dom";

function Header({menuStatus}) {
    return (
        <header className="header_v2">
            <div className="header_v2-row">
                <Link to={'/'}>
                    <img src={LogoSVG} alt="Logo"/>
                </Link>
                {
                    menuStatus &&
                    <Link to={'/profile'} className={'header_v2-row-button'}>
                        Увійти
                    </Link>
                }
            </div>
            <hr className="header_v2-line"/>
            {
                menuStatus &&
                <div className="header_v2-menu">
                    <a href={'#about'} className="header_v2-menu-item">
                        Про підприємство
                    </a>
                    <a href={'#history'} className="header_v2-menu-item">
                        Історія
                    </a>
                    <a href={'#slider'} className="header_v2-menu-item">
                        Продукція
                    </a>
                </div>
            }
        </header>
    )
}

export default Header