import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
   const handleLogin = () =>{

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        //headers: { 'Authorization': 'Bearer {token}' },
        body: JSON.stringify({ email: email, password:password, name:"Lawrence" })
      };
      
      fetch('https://localhost:7048/api/users', requestOptions)
              .then(response => response.json())
              .then(result => {
                localStorage.setItem("token",result.token);
              });
   };


  return (
    <div className="login-div">
       <div className="login-form">
            <input type="text" placeholder='Email' onChange={(event)=>setEmail(event.target.value)}/>
            <input type="text" placeholder='Password' onChange={(event)=>setPassword(event.target.value)}/>
            <button onClick={handleLogin}>Sign In</button>
        </div> 
    </div>
  )
}

export default Login