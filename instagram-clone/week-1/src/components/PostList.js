import React from 'react';
import Post from './Post'

function PostList({ posts }) {
    // Instead of passing the entire post object  post={post} we can simply spread in all properties of this object {...post}
    // We'll get directly from spread object image, content, user
    return posts.map(post => (<Post key={post.id} {...post} />));
}


export default PostList;