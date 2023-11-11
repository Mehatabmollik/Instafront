import React from "react";
import Status from "./status";
import Post from "./post";
const Main = () => {
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Status/>
        <Post/>
        </div>
    )
}
export default Main