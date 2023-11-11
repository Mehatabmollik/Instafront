import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from './Header'
import { myInfo } from '../../data/myinfo';
import Mypost from './Mypost';
const Profile = () => {
  return (
    <div style={{display:"flex",gap:"2vw"}}>

       <Sidebar/>
       <div>
      <Header myInfo={myInfo}/>
      <Mypost post={myInfo.posts}/>
        </div>
      
    </div>
  )
}

export default Profile
