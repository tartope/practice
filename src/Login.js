import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    let refUserName = useRef(null);
    let refPassword = useRef(null);
    let navigate = useNavigate();

    const handleClick = ()=>{
        refUserName.current.value = "";
        refPassword.current.value = "";
        navigate("/");
    }

  return (
    <div>
        Login
        <br />
        <input type='text' ref={refUserName} placeholder='Username'></input>
        <br />
        <input type='password' ref={refPassword} placeholder='Password'></input>
        <br />
        <button onClick={()=> handleClick()}>Submit</button>
    </div>
  )
}
