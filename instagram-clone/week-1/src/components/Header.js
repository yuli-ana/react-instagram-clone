import React from 'react';

function Header({ user, setUser }) {

    return (
        <>
            Welcome, {user}!
            <button onClick={() => setUser('')}>Logout</button>
        </>
    );
}
export default Header;