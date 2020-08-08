import React from 'react';
import { UserContext } from '../App'

function Post({ image, content, user }) {

    // To consume a data we need to provide a functions as a child
    // We return JSX which is wrapped in another fragment to make the code work
    return (
        <UserContext.Consumer>
            {(currentUser) => (
                <>
                    {image && <img
                        style={{ height: 100, width: 100, objectFit: 'cover' }}
                        src={URL.createObjectURL(image)}
                        alt="Post cover" />
                    }
                    <p>{content}</p>
                    <p style={{ color: currentUser === user && "green"}}>Posted by {user}</p>
                </>
            )}
        </UserContext.Consumer>
    );
}
export default Post;