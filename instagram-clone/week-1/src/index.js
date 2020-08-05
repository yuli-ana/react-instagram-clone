import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


function App() {
  const [language, setLanguage] = React.useState('python');
  const [yearsExperience, setYearsExperience] = React.useState(0);

  // function handleInputChange(event) {
  //   setInputValue(event.target.value);
  // }


  return (
    <div>
      <button onClick={() => setLanguage('javascript')}>Change language</button>
      <input
        type="number"
        onChange={event => setYearsExperience(event.target.value)}
      />
      <p>I'm currently learning {language} and I have {yearsExperience} years of experience</p>
    </div>
  )
}

const rootNode = document.querySelector("#root");




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
