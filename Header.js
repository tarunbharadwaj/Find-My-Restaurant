import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

//function component
const Header = () => {
    return(
        <React.Fragment>
            <div className="navone">
                <div className="navtwo">
                    <div className="myNavbar">
                        <Link id="home" to='/'>Home</Link>
                        <Link id="orders" to='/orders'>Orders</Link>
                        <Link id="list" to='/list/1'>Restaurant</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
} 

export default Header;