import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const onMouseEnterHandler = () => {
        setShowDropDown(true);
    }
    const onMouseExitHandler = () => {
        setShowDropDown(false);
    }
    return (
        <div className='navbarContainer'>
            <div className='nav-heading'>
                <h1 className='head-text'>Northeastern University Economics Society</h1>
                <h5 className='head-subtext'>Economics news and reporting from students of Northeastern University</h5>
            </div>
            <div className='nav-links'>
                <div><Link to='/'><a href='#'>Home</a></Link></div>
                <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseExitHandler}><a href='#'>Economics Society</a>
                    {showDropDown && (
                        <div className='dropDownContainer'>
                            <Link to='/boston-symposium'><a>Boston Symposium</a></Link>
                            <Link to='/upcoming-events'><a>Upcoming Events</a></Link>
                            <Link to='/past-events'><a>Past Events</a></Link>
                            <Link to='/news-letter'><a>News Letter</a></Link>
                        </div>
                    )}
                </div>
                <div>
                    <Link to='/econ-press'><a>Econ Press</a></Link>
                </div>
                <div>
                    <Link to='/fed'><a>FED Challange</a></Link>
                </div>
                <div>
                    <Link to='/eboard'><a>Meet the EBOARD</a></Link>
                </div>
                <div>
                    <Link to='/login'><a>Login</a></Link>
                </div>
            </div>
        </div >
    );
}

export default Navbar;