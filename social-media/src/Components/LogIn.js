import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";

export default function LogInPage(){
    const [UserInfo, setUserInfo] = useContext(DataContext)
    const [inputValue, setInputValue] = useState('')

    

    const loginName = ((e) => {
        setInputValue(e.target.value)
        console.log(e.target.value)

    })
    const saveUserInfo = (() => {
        setUserInfo((prevState) => ({...prevState, displayName: inputValue}))
        console.log(UserInfo)
    })
  

    // setUserInfo({displayName: e.target.value})
    return(
        <>
        <h1>LogInPage woks!</h1>
        <div>
            <input onChange={loginName} placeholder="User name"/>
            <input placeholder="Password"/>
            <button onClick={saveUserInfo}> testing Log In</button>
        </div>
        <Link to='/dashboard'>
            <button>Log In</button>
        </Link>
        <Link to='/NewUser'>
            <button>Sign Up</button>
        </Link>
        </>
    )
}