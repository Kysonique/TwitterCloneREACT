import { Link } from "react-router-dom";

export default function DashboardPage(){
    return(
        <>
        <img alt="banner"/>
        <div>
            <img alt="userIMG"/>
            <p></p>
            <Link to='/Login'>
                <button>Logout</button>
            </Link>
            <Link to='/NewUser'>
                <button>New User</button>
            </Link>
            <button>Edit Bio</button>
        </div>
        <button>Posts</button> <button>Gallery</button>
        <div id="post-container">
            <div id='post-card'>
                <input placeholder="Create new post"/>
                <button>Submit</button>
            </div>
        </div>
        <div id="gallery">
            <input type='file' placeholder="Add photo"/>
        </div>

        <Link to='/'>
            <button>Log Out</button>
        </Link>
        </>
    )
}