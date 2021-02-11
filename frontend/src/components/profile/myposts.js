import React from 'react'

function myposts({post}) {
    console.log(post)
    return (
        <div>
            <h3>{post.title}</h3>]
            <p>{post.description}</p>
        </div>
    )
}

export default myposts
