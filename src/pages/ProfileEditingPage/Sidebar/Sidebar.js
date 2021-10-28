import React from 'react'
import SidebarItem from './SidebarItem'

const Sidebar = (props) => {
    return (
        <div>
            <SidebarItem
                onClick={props.onClickEditProfile}
                active={props.isEditProfile}
                text="Edit Profile"
            />
            <SidebarItem
                onClick={props.onClickChangePassword}
                active={!props.isEditProfile}
                text="Change Password"
            />
        </div>
    )
}

export default Sidebar
