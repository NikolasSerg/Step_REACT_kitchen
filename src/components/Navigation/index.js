import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';



const Navigator = () => (
    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to={ROUTES.HOME} className="navbar-brand">Logo</NavLink>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav  mx-auto">
                <li className="nav-item"><NavLink className="nav-link" to={ROUTES.SIGN_IN}>Sign in</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to={ROUTES.LANDING}>Landing</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={ROUTES.HOME}>Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={ROUTES.ACCOUNT}>Account</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={ROUTES.ADMIN}>Admin</NavLink></li>
            </ul>
        </div>
    </nav>
);

export default Navigator;