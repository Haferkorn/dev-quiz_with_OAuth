import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthProvider";

const initalState={
    username:"",
    password:""
}

export default function LoginPage(){

    const[credentials, setCredentials]=useState(initalState)
    const { login } = useContext(AuthContext)


    const handleChange=event=>{
        setCredentials({...credentials,[event.target.name] : event.target.value})
    }

    const sendLoginInformation=(event)=>{
        event.preventDefault();
        login(credentials)
    }

    return(
        <form onSubmit={sendLoginInformation}>
            <input required name="username" type="text" placeholder={"userName"} value={credentials.username} onChange={handleChange}/>
            <input required name="password" type="text" placeholder={"Password"} value={credentials.password} onChange={handleChange}/>
            <button>Login</button>
        </form>
    )
}