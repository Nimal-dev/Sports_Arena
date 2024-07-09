import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate('')

    const handleSubmit=()=>{
      let param = {
        email: email,
        password: password,
      };
      fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param),
      }).then((res)=>res.json())
      .then((result)=>{
        console.log(result)
        if(result.status !==401){
          localStorage.setItem("userdata",JSON.stringify(result.data))
          setTimeout(()=>{
            navigate('/')
            window.location.reload()
  
          },1000)
        }else{
          alert("Invalid Credentials")
        }
      })
    }

    return (
        <>
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="submit" onClick={handleSubmit} />
        </>
    );
}

export default Login;
