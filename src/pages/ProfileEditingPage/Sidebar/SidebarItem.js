import React from 'react'
import classes from './SidebarItem.module.css'

const SidebarItem = (props) => {
    return (
        <p className={classes.item}>
            {props.active && <span className={classes.active}></span>}
            {props.text}
        </p>
    )
}

export default SidebarItem
