import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        let isLoggedIn = true;

        let links;
        if (!isLoggedIn) {
            links = (
                <ul className="navbar-nav ms-auto">
                    <li>
                        <Link className="nav-link" to="/login">
                            Logout
                        </Link>
                    </li>
                </ul>
            );
        }
        return (
            <div className="shadow-sm bg-light mb-2">
                <nav className="navbar navbar-light container navbar-expand">
                    CV App {links}
                </nav>
            </div>
        )
    }
}
