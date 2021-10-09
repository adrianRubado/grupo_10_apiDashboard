import React from 'react'
import Logo from './Logo'
import NavItem from './NavItem'
import SidebarLine from './SidebarLine'
import Title from './Title'


function Sidebar() {

    const items = [
        {
            icon : 'fas fa-fw fa-folder',
            title : 'Pages'
        },
        {
            icon : 'fas fa-fw fa-chart-area',
            title : 'Charts'
        },
        {
            icon : 'fas fa-fw fa-table',
            title : 'Tables'
        }
    ]
    return (

        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

            <SidebarLine class = "sidebar-divider my-0"/>
            <Logo/>
            <Title title = 'My mad games'/>
            <SidebarLine class = "sidebar-divider"/>
			<div className="sidebar-heading">Actions</div>

            {items.map((i) => <NavItem icon = {i.icon} title = {i.title}/>)}
			<SidebarLine class ="sidebar-divider d-none d-md-block"/>
		</ul>



    )
}

export default Sidebar
