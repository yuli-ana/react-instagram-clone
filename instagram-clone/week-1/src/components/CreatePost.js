import React, { useState } from 'react';


function CreatePost({ user, handleAddPost }) {
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const imageInputRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        // Store all values in an object
        const post = { content, image, user };
        handleAddPost(post);

        // const newPosts = [post, ...posts];
        // setPosts(newPosts)
        // setPosts(prevPosts => ([post, ...prevPosts]));
        setContent("");
        imageInputRef.current.value = '';
    }


    return (
        <>
            <h1>Create New Post</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add Post Content"
                    onChange={e => setContent(e.target.value)}
                    value={content}
                />
                <input
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                    ref={imageInputRef}
                />
                <button type="submit">Submit Post</button>
            </form>
        </>

    );
}
export default CreatePost;