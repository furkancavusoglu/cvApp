import React, { Component } from 'react'
import { Link } from 'react-router-dom';


// LoginPage e yönledirebilen bir navigation bar componentidir.
export default class NavBar extends Component {
    state = {
        isLoggedIn: false
    };

    render() {
        const {isLoggedIn} = this.state;

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
                <nav className="navbar navbar-light container">
                    CV App {links}
                </nav>
            </div>
        )
    }
}
