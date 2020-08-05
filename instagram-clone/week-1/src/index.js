import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// const endpoint = 'https://api.github.com/users/yuli-ana';

const baseUrl = 'https://api.github.com/users/';

function App() {
  // If we get data in an object than initial value could be set to null or undefined
  const [user, updateUser] = React.useState(null);

  const [userName, setUserName] = React.useState("yuli-ana");



  async function getUserData() {
    const response = await fetch(`${baseUrl}${userName}`);
    const data = await response.json();
    setUserName(data);
  }



  // Replace then method with a async / await
  // useEffect doesn't want us doing is making the effect function async
  React.useEffect(() => {

    getUserData();
    // fetch(endpoint)
    //   .then(response => response.json())
    //   .then(data => updateUser(data));

    // Empty dependencies array will make sure that Effect function runs only once when the component mounts
  }, []);



  return (
    <div>
      <input type="text" onChange={(e) => { setUserName(e.target.value) }} placeholder="Input username" />
      <button onClick={getUserData}>Search</button>
      <button onClick={handleClearInput}>Clear</button>
      {user ? (
        <div>
          <h2 style={{ color: "lightblue" }}>{user.name}</h2>
          <p>{user.bio}</p>
          <img src={user.avatar_url} style={{ height: "50px" }} alt={user.login} />
        </div>
      ) : (
          <p>Loading</p>
        )}
    </div>
  )
}

const rootNode = document.querySelector("#root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootNode,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
