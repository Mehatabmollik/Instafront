import React from 'react'
import "../../styles/sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
        <ul >
            <li style={{marginBottom:"20px"}}><img width="120px" src="https://i.pinimg.com/originals/d5/1d/09/d51d097fbbd5cdc277d80c605ad1c455.png" alt="flex"/></li>
            <li>Home</li>
            <li>Search</li>
            <li>Explore</li>
            <li>Reels</li>
            <li>Messages</li>
            <li>Notifications</li>
            <li>Create</li>
            <li>profile</li>

        </ul>
        
    </div>
  )
}

export default Sidebar
