import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {

    let history =  useHistory();

    let[userVal , setUser] =  useState("");
    let[userPassword , setUserPassword] =  useState("");

    const handleLogin = (e)=>{
        e.preventDefault();
        fetch("http://localhost:4000/users")
        .then((res)=>{ return res.json()})
        .then((data)=> {
            let [user] = data.filter((user)=> (user.userName===userVal || user.mailid===userVal)   );

            if(user != undefined && user.password===userPassword)
            {
                alert("login successfull");
                history.push("/addtask");
            }
            else if(user != undefined && user.password!=userPassword)
            {
                alert("wrong password please enter valid password");
            }
            else
            {
                alert("User Not found");
            }  
        })

    }
    return ( 
        <div className="login">
            <div className="login-box">
                <h1> Login </h1>

                <form onSubmit={handleLogin}>

                    <input type="text" placeholder="User Name or mail id" value={userVal}
                    onChange={(e)=>{setUser(e.target.value)}} />

                    <input type="password" placeholder="password" value={userPassword}
                    onChange={(e)=>{setUserPassword(e.target.value)}}/>

                    <input type="submit" value="Login"/>

                </form>

                <span>Don't have an account ? </span> <Link to="/signup">  <span>signup</span>  </Link>
            </div>
        </div>
    );
}
export default Login;