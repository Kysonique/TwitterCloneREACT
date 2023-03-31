import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage(){
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [birthday, setBirthday] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [display, setDisplay] = useState("")
    const [password, setPassword] = useState("")
    const ID = "OP" + Math.floor(Math.random() * 1000)


    const handleSubmit = (() => {
        
        alert('New User Created')
        
    })  
    
    // useEffect((handleSubmit) => {
    //     fetch('https://react-socail-media-e8676-default-rtdb.firebaseio.com/users.json', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             displayName: display,
    //             firstName: first,
    //             lastName: last,
    //             birthday: birthday,
    //             id: ID,
    //             phoneNumber: phone,
    //             email: email,
    //             password: password

    //         }),
    //         headers:{
    //             'content-type':'aplication/json; charset=UTF-8'
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         })
    // }, [handleSubmit])
    
    
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
        <button onClick={(() => handleSubmit)}>Submit info</button>
        <Link to='/'>
            <button>cancel</button>
        </Link>
        <Link to='/dashboard'>
            <button>Sign In</button>
        </Link>
        </>
    )
}