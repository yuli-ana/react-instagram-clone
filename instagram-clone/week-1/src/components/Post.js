import React from 'react';
import { UserContext } from '../App'

function Post({ image, content, user }) {
    const currentUser = React.useContext(UserContext);

    // To consume a data we need to provide a functions as a child
    // We return JSX which is wrapped in another fragment to make the code work
    return (
        <>
            {image && <img
                style={{ height: 100, width: 100, objectFit: 'cover' }}
                src={URL.createObjectURL(image)}
                alt="Post cover" />
            }
            <p>{content}</p>
            <p style={{ color: currentUser === user && "green" }}>Posted by {user}</p>
        </>
    );
}
export default Post;