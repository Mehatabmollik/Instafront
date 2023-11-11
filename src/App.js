import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles/app.css"
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <div className="App">
      <Profile/>
     {/*<Home/>*/}
      {/*<div style={{height:'100vh',display:"flex",alignItems:"center"}}>
      <Register/>*/}
       {/*<Login/>*/}
      {/*</div>*/}
    
    </div>
  );
}

export default App;
