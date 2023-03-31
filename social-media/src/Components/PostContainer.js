export function PostContainer(props){
    const {NewMessage} = props
    return(
        <>
            <div id="post-container">
                <img alt=""/>
                <p>display name</p>
                <input value={NewMessage} readOnly/>
                <div>
                    <button>edit</button>
                    <button>delete</button>
                </div>
                
                
            </div>
        </>
    )
}