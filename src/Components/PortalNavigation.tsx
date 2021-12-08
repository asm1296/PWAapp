import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import './PortalNavigation.module.scss';


function PortalNavigation(){    
    return(
        <div>
            <nav>
                <img src={logo} alt='ReactLogo' ></img>
                <Link to="/"><h2>React Store</h2></Link>
                <ul>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>  
            </nav>
        </div>
        
    )
}

export default PortalNavigation;