import React from 'react'

function NavItem(props) {
    return (
        <li className="nav-item">
        <a className="nav-link" href="/">
            <i className={props.icon}></i>
            <span>{props.title}</span>
        </a>

    </li>
    )
}

export default NavItem
