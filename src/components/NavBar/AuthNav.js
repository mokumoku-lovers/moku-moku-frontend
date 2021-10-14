import React from 'react'
import classes from './NavBar.module.css'
import icon from '../../icon.svg'

const AuthNav = () => {
    return (
        <ul className={classes['nav-menu']}>
            <div className={classes['input-control']}>
                <input type="text" className={classes.searchbar} />
                <i className={`fas fa-search ${classes['search-icon']}`}></i>
            </div>
            <img src={icon} alt="Icon" className={classes['user-avatar']} />
        </ul>
    )
}

export default AuthNav
