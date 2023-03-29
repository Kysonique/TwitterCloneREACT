import { Link } from "react-router-dom";

export default function SignUpPage(){
    return(
        <>
        <Link to='/Login'>
            Already a member? Log in!
        </Link>
        <div id="formContainer">
                <input placeholder="First Name"/>
                <input placeholder="Last Name"/>
                <input placeholder="Birthday"/>
                <input placeholder="Phone Number"/>
                <input placeholder="Display Name"/>
                <input placeholder="Create Password"/>
                <input placeholder="Re-type Password"/>
        </div>

        <Link to='/'>
            <button>cancel</button>
        </Link>
        <Link to='/dashboard'>
            <button>Sign In</button>
        </Link>
        </>
    )
}