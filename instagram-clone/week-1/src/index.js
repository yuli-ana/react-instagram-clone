import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


function App() {
  // const [language, setLanguage] = React.useState('python');
  // const [yearsExperience, setYearsExperience] = React.useState(0);

  // Concise way of useState
  const [developer, setDeveloper] = React.useState({
    name: "",
    language: "PYTHON",
    yearsExperience: 0,
    isEmployed: false,
  });

  React.useEffect(() => {
    // Here we can access DOM API 
    // Document.title has a dynamic value
    document.title = developer.name;
    console.log("runs");
    // Note: naturally is going to run when the input is updated but it also going to run whenever any other piece of state is updated
  }, [developer.name]);

  // function handleInputChange(event) {
  //   setInputValue(event.target.value);
  // }

  function handleChangeLanguage() {
    setDeveloper({
      language: "javascript",
      yearsExperience: 2,
    })
  }

  function handleChangeYearsExperience(event) {
    setDeveloper({
      ...developer,
      yearsExperience: event.target.value,
    })
  }


  function handleChangeTitle(e) {
    setDeveloper({
      ...developer,
      name: e.target.value
    })
  }


  function handleToggleEmployment() {
    setDeveloper(prevState => ({
      ...prevState,
      isEmployed: !prevState.isEmployed,
    }));
  }

  return (
    <div>
      <button onClick={handleToggleEmployment}>Toggle Employment Status</button>
      <button onClick={handleChangeLanguage}>Change language</button>
      <input
        type="number"
        onChange={handleChangeYearsExperience}
      />
      <input type="text" onChange={handleChangeTitle} placeholder="Change name" />
      <p>I'm currently learning {developer.language} and I have {developer.yearsExperience} years of experience</p>
      <p>Employment status: {developer.isEmployed ? "Employed" : "Unemployed"}</p>
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




