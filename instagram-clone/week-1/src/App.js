import React, { useState, useEffect, useCallback } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

const functionsCount = new Set();


function App() {
    const [user, setUser] = useState('');
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = user ? `${user}'s Feed` : 'Please Login';
    },
        [user]
    );


    // We might be updating the App state a lot, to fix that and for better performance we can use callback hook
    // For 2 argument tell when to recreate this function, when out posts array changes
    // React.useCallback memoized callback
    const handleAddPost = useCallback(
        newPost => {
        setPosts([newPost, ...posts]);
    }, [posts]);

    functionsCount.add(handleAddPost);
    console.log(functionsCount);

    // if (!user) {
    //     return <Login setUser={setUser} />;
    // }



    return (
        <>
            <Header user={user} setUser={setUser} />
            <CreatePost user={user} handleAddPost={handleAddPost} posts={posts} />
            <PostList posts={posts} />
            <button onClick={() => setCount(prev => prev + 1)}>{count} +</button>
        </>
    );
}
export default App;

