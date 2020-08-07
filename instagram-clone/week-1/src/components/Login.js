import React, { useState } from 'react';

function Login({ setUser }) {
    const [userName, setUserName] = useState('');

    // When a user submits the form pass state to the App component (lift a state up)
    function handleSubmit(e) {
        e.preventDefault();
        setUser(userName);
    }

    return (
        <>
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <input
                    onChange={e => setUserName(e.target.value)}
                    placeholder="Input username"
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
export default Login;