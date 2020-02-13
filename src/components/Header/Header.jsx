import React from 'react';
import Menu from './Menu/Menu';
import { NavLink } from 'react-router-dom';
import './Header.css';

let Brand = () => {
    return <NavLink className="navbar-brand mr-auto" to="/online-store/">Company name</NavLink>
}

let MenuToggler = () => {
    return <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
}

export default function Header({basket}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <Brand />
            <MenuToggler />
            <Menu basket={basket} />
        </nav>
    )
}