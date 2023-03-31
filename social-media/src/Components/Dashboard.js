import { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { PostContainer } from "./PostContainer";
import { DataContext } from "../Context/DataContext";

export default function DashboardPage(){
    const [UserInfo, setUserInfo] = useContext(DataContext)
    const [postMessage, setPostMessage] = useState('')
    const [sendMessage, setSendMessage] = useState('')
    const [userPosts, setUserPosts] = useState()

    const getPosts = useCallback(() => {
       
            fetch('https://react-socail-media-e8676-default-rtdb.firebaseio.com/posts.json')
                 .then((response) => response.json())
                 .then((data) => 
                     setUserPosts(data)
                 )
        
                 .catch((err) => {
                     console.log(err.message)
                 });
          
    })


    const handleInput = ((e) => {
        setPostMessage(e.target.value)
        console.log(e.target.value)
    })

    const handleSubmit = (() => {
        setSendMessage(postMessage)
        getPosts()
        console.log(userPosts)


    })


    // useEffect(() => {
    //     fetch('https://react-socail-media-e8676-default-rtdb.firebaseio.com/posts.json', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             id: ID,
    //             message: sendMessage

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
    // }, [])


 
    
    return(
        <>
        <img alt="banner"/>
        <div>
            <img alt="userIMG"/>
            <p>{UserInfo.displayName}</p>
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
                <input onChange={handleInput} placeholder="Create new post"/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        <div id="gallery">
            <input type='file' placeholder="Add photo"/>
        </div>
        <PostContainer NewMessage={sendMessage}/>

        <Link to='/'>
            <button>Log Out</button>
        </Link>
        </>
    )
}