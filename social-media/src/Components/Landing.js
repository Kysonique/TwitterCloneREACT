import { Link } from 'react-router-dom';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);



export default function LandingPage(){

    return(
        <>
        <h1>LandingPage woks!</h1>
        <Link to='/NewUser'>
            <button>Sign Up</button>
        </Link>
        <Link to='/Login'>
            <button>Log In</button>
        </Link>
        </>
    )
}