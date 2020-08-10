import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import postReducer from './reducer';


// Helps to pass data down on
// Every context is an object which consists of 2 properties: UserContext.provider &  UserContext.consumer
// named export 
export const UserContext = React.createContext();
export const PostContext = React.createContext({
    posts: [],
});


function App() {
    // const [posts, setPosts] = useState([]);
    const initialPostState = React.useContext(PostContext);
    const [state, dispatch] = React.useReducer(postReducer, initialPostState);
    const [user, setUser] = useState('');
    // const [state, dispatch] = React.useReducer(() => initialPostState);


    useEffect(() => {
        document.title = user ? `${user}'s Feed` : 'Please Login';
    },
        [user]
    );


    // We might be updating the App state a lot, to fix that and for better performance we can use callback hook
    // For 2 argument tell when to recreate this function, when our posts array changes
    // React.useCallback memoized callback
    // Usecallback remembers handleAddPost object and doesn't redeclare handleAddPost each re-render, only if dependencies have changed
    // const handleAddPost = useCallback(
    //     newPost => {
    //         setPosts([newPost, ...state.posts]);
    //     }, [posts]);



    if (!user) {
        return <Login setUser={setUser} />;
    }



    return (
        <PostContext.Provider value={{ state, dispatch }}>
            <UserContext.Provider value={user}>
                <Header user={user} setUser={setUser} />
                <CreatePost user={user} />
                <PostList posts={state.posts} />
            </UserContext.Provider>
        </PostContext.Provider>
    );
}
export default App;

// Avoid pattern of passing props multiple levels called props drilling instead create context feature

