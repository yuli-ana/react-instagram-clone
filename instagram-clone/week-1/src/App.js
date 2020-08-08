import React, { useState, useEffect, useCallback } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

// Helps to pass data down on
// Every context is an object which consists of 2 properties: UserContext.provider &  UserContext.consumer
// named export 
export const UserContext = React.createContext();

function App() {
    const [user, setUser] = useState('');
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        document.title = user ? `${user}'s Feed` : 'Please Login';
    },
        [user]
    );


    // We might be updating the App state a lot, to fix that and for better performance we can use callback hook
    // For 2 argument tell when to recreate this function, when our posts array changes
    // React.useCallback memoized callback
    // Usecallback remembers handleAddPost object and doesn't redeclare handleAddPost each re-render, only if dependencies have changed
    const handleAddPost = useCallback(
        newPost => {
            setPosts([newPost, ...posts]);
        }, [posts]);



    if (!user) {
        return <Login setUser={setUser} />;
    }



    return (
        <UserContext.Provider value={user}>
            <Header user={user} setUser={setUser} />
            <CreatePost user={user} handleAddPost={handleAddPost} posts={posts} />
            <PostList posts={posts} />
        </UserContext.Provider>
    );
}
export default App;

// Avoid pattern of passing props multiple levels called props drilling instead create context feature

