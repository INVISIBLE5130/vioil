import React from "react";
import LogoSVG from '../../assets/logo.svg'
import {Link} from "react-router-dom";
import './Header.css'

function Header() {
    return (
        <header className={'header'}>
            <Link to={'/'} className={'header-link'}>
                Про товариство
            </Link>
            <Link to={'/history'} className={'header-link'}>
                Історія
            </Link>
            <img className={'header-logo'} src={LogoSVG} alt="Logo"/>
            <Link to={'/agroholding'} className={'header-link'}>
                Агрохолдинг
            </Link>
            <Link to={'/auth'} className={'header-link button-link'}>
                Зареєструватись/Увійти
            </Link>
        </header>
    )
}

export default Header