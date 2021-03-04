import React from 'react'
import { Link, withRouter, NavLink } from "react-router-dom";

const Nav = props => {
    console.log(props)
    return (
        <div className="w-100">
            <ul className="nav nav-pills d-flex justify-content-center ">
                <li className="nav-item ">
                    <NavLink to="/" className="nav-Link btn" exact activeClassName="active" activeStyle={{backgroundColor:'gray'}}>کارهای روزمره</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-Link btn" activeClassName="active" activeStyle={{backgroundColor:'gray'}}>سازنده</NavLink>
                </li>
            </ul>
        </div>

    );
}

export default withRouter(Nav);