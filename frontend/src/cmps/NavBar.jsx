import React from 'react'

import { NavLink, withRouter } from 'react-router-dom';

export function _NavBar() {

    return (
        <nav className="nav-bar flex space-between">
            <div className="flex">
                <h3 className="logo">Device Tree</h3>
                <i className="fa fa-usb usb-icon" ></i>
            </div>
            <div className="nav-items flex">
                <NavLink activeClassName="active-page" exact className="nav-item" to="/">DEVICES</NavLink>
                <NavLink activeClassName="active-page" exact className="nav-item" to="/about">ABOUT</NavLink>
            </div>
        </nav>
    )
}

export const NavBar = withRouter(_NavBar)

