import { Link } from "react-router-dom";

export default function LogInPage(){
    return(
        <>
        <h1>LogInPage woks!</h1>
        <div>
            <input placeholder="User name"/>
            <input placeholder="Password"/>
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