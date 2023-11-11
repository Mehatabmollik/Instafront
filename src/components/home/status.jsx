import React from "react";
import "../../styles/status.css"
import {obj as statusObj} from "../../data/statusData"


const status = () => {
  return (
    <div className="statuscontainer">
        {
            statusObj.map(obj=>{
                return <div style={{display:"flex",
                flexDirection:"column",gap:"10px",
                alignItems:"center"}}>

                     <img style={{border:"3px solid pink",borderRadius:"50%"}} width="50px" height="50px" src={`${obj.profilePic}`} alt ="profilePic"/>
                     <span>{obj.username}</span>
                </div>
            })
        }
      
    </div>
  )
}

export default status
