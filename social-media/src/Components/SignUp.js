import { Link } from "react-router-dom";

export default function SignUpPage(){
    return(
        <>
        <h1>SignUpPage woks!</h1>
        <Link to='/'>
            <button>cancel</button>
        </Link>
        <Link to='/dashboard'>
            <button>Sign In</button>
        </Link>
        </>
    )
}