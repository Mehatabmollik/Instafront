import React from "react";
import  SuggestionData from "../../data/suggestions"
import "../../styles/suggestion.css"
const Suggestion = () =>{
    return(
        <div style={{width:'15vw',marginTop:"5vh",marginRight:"5vh"}}>
            {
             SuggestionData.map(user=>{
                return <div style={{marginTop:"1vh",height:"100px",display:"flex"
                ,justifyContent:"space-between",alignItems:"center"
                ,border:"1px solid grey",marginLeft:"1vw",paddingLeft:"1vw"}}>

                      <div style={{height:"100px",display:"flex",
                    flexDirection:"column",justifyContent:"center",gap:"10px"}}>

                    <span>{user.username}</span>

                    <img src={`${user.profilePic}`} width="40px" height="40px"
                style={{borderRadius:"50%"}} alt=""/>
                      </div>
                     
                     <span className="followlink" >Follow</span>

                </div>
             })
            }
        </div>
    )
}
export default Suggestion