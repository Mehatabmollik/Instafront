import React from "react";
import "../styles/register.css"
const Register =() => {
    return (
        <div className="registercontainer">
             <h3>Register</h3>
        <div>
            <input type="email" name="email" placeholder="Enter email"/>
        </div>
        <div>
            <input type="password" name="password" placeholder="enter password"/>
        </div>
        <button>Registration</button>
        <button className="link">want to Login?</button>
        </div>
    )
}
export default Register