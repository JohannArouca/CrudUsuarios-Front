import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" title="Início" link="/"></NavItem>
            <NavItem icon="users" title="Usuários" link="/users"></NavItem>
            {/* <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a> */}
        </nav>
    </aside>