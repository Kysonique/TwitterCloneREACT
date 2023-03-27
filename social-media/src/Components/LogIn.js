import { Link } from "react-router-dom";

export default function LogInPage(){
    return(
        <>
        <h1>LogInPage woks!</h1>
        <Link to='/dashboard'>
            <button>Log In</button>
        </Link>
        <Link to='/NewUser'>
            <button>Sign Up</button>
        </Link>
        </>
    )
}