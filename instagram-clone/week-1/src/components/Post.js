import React from 'react';

function Post({ image, content, user }) {

    return (
        <>
            <h1>Create a new Post</h1>
            {image && <img
                style={{ height: 100, width: 100, objectFit: 'cover' }}
                src={URL.createObjectURL(image)}
                alt="Post cover" />
            }
            <p>{content}</p>
            <p>Posted by {user}</p>
        </>
    );
}
export default Post;