import { useEffect, useState } from "react";

export function useFetch(){
    const [userPosts, setUserPosts] = useState()
    const URL = 'https://react-socail-media-e8676-default-rtdb.firebaseio.com/posts.json'
    useEffect(() => {
        fetch(URL)
             .then((response) => response.json())
             .then((data) => 
                 setUserPosts(data)
             )
    
             .catch((err) => {
                 console.log(err.message)
             });
     }, [])

    return {data: userPosts}
}