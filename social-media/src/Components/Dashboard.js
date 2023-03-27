import { Link } from "react-router-dom";

export default function DashboardPage(){
    return(
        <>
        <h1>DashboardPage woks!</h1>
        <Link to='/'>
            <button>Log Out</button>
        </Link>
        </>
    )
}