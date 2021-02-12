import React,{useState} from 'react'
import EditPost from "./EditPost";
import './myposts.css'

function Myposts({post}) {
    const [editMode, setEditMode] = useState(false);
    const handleClick = () => {
      setEditMode(true);
    };
    console.log(post)
    return (
        <div className='posts' >
            {editMode ? (
        <EditPost post={post} cancel={setEditMode} />
      ) : (
            <div className='post'>
                <h3>{post.title}</h3>]
                <p>{post.description}</p>
                <button onClick={handleClick} className="profileEditButton">
                    Edit
                </button>
            </div>
      )}
        </div>
    )
}

export default Myposts
