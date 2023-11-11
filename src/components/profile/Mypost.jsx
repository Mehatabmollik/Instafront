import React from 'react'

const Mypost = ({post}) => {
  return (
    <div>
         <div style={{padding:"2vh 0vh",marginTop:"5vh",borderTop:"1px solid grey",display:"flex",justifyContent:"center",gap:"5vh",textTransform:"uppercase"}}>
            <span>posts</span>
            <span>reels</span>
            <span>saved</span>
            <span>tagged</span>
         </div>
      <div style={{width:"60vh",display:"grid",gridTemplateColumns:"auto auto auto",columnGap:"1vh",rowGap:"1vh"}} >
        {post.map((ele)=>{
           return <img src={`${ele.postImage[0]}`} alt="" style={{width:"300px",height:"300px",objectFit:"cover"}}/>
        })}
      
      </div>
     </div> 
  )
}

export default Mypost
