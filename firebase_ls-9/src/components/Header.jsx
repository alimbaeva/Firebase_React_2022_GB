import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <p>Contact app</p>
            <NavLink to={'/login'} >
                Войти
            </NavLink>
        </div>
    )
}

export default Header