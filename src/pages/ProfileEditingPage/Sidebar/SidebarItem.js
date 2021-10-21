import React from 'react'
import classes from './SidebarItem.module.css'

const SidebarItem = (props) => {
    return (
        <p {...props} className={classes.item}>
            {props.text}
        </p>
    )
}

export default SidebarItem
