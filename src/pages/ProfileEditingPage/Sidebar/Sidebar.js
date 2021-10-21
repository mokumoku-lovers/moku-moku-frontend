import React from 'react'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
    return (
        <div>
            <SidebarItem active text="Edit Profile" />
            <SidebarItem text="Change Password" />
        </div>
    )
}

export default Sidebar
