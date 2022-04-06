import React from "react";
import LogoSVG from '../../assets/logo.svg'
import {Link} from "react-router-dom";
import './Header.css'

function Header() {
    const activeTab = tab => window.location.pathname === tab
        ? {
            color: '#78C151'
        }
        : null

    return (
        <header className={'header'}>
            <Link to={'/'} className={'header-link'} style={activeTab('/')}>
                Про товариство
            </Link>
            <Link to={'/history'} className={'header-link'} style={activeTab('/history')}>
                Історія
            </Link>
            <img className={'header-logo'} src={LogoSVG} alt="Logo"/>
            <Link to={'/agroholding'} className={'header-link'} style={activeTab('/agroholding')}>
                Агрохолдинг
            </Link>
            <Link to={'/auth'} className={'header-link button-link'}>
                Зареєструватись/Увійти
            </Link>
        </header>
    )
}

export default Header