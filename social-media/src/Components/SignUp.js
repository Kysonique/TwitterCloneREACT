import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";

export default function SignUpPage(){
    const [UserInfo, setUserInfo] = useContext(DataContext)
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [birthday, setBirthday] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [display, setDisplay] = useState("")
    const [password, setPassword] = useState("")
    const ID = "OP" + Math.floor(Math.random() * 1000)

   
    const handleSubmit = (() => {
        setUserInfo((prevState) => ({...prevState, firstName: first}))
        setUserInfo((prevState) => ({...prevState, lastName: last}))
        setUserInfo((prevState) => ({...prevState, birthday: birthday}))
        setUserInfo((prevState) => ({...prevState, phoneNumber: phone}))
        setUserInfo((prevState) => ({...prevState, email: email}))
        setUserInfo((prevState) => ({...prevState, displayName: display}))
        setUserInfo((prevState) => ({...prevState, password: password}))
        setUserInfo((prevState) => ({...prevState, id: ID}))

        
        alert('New User Created')
        console.log(UserInfo)
        
    })  
    
    return(
        <>
        <Link to='/Login'>
            Already a member? Log in!
        </Link>
        <div id="formContainer">
                <input onChange={((e) => setFirst(e.target.value))} placeholder="First Name"/>
                <input onChange={((e) => setLast(e.target.value))} placeholder="Last Name"/>
                <input onChange={((e) => setBirthday(e.target.value))} placeholder="Birthday"/>
                <input onChange={((e) => setEmail(e.target.value))} placeholder="Email"/>
                <input onChange={((e) => setPhone(e.target.value))} placeholder="Phone Number"/>
                <input onChange={((e) => setDisplay(e.target.value))} placeholder="Display Name"/>
                <input onChange={((e) => setPassword(e.target.value))} placeholder="Create Password"/>
                <input placeholder="Re-type Password"/>
        </div>
        <button onClick={handleSubmit}>Submit info</button>
        <Link to='/'>
            <button>cancel</button>
        </Link>
        <Link to='/dashboard'>
            <button>Sign In</button>
        </Link>
        </>
    )
}