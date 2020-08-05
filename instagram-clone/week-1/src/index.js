import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


function App() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  function handleMouseMove(event) {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    })
  }


  return (
    <div>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
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

function Test() {
  return (
    <div>New page</div>
  )
}


setTimeout(() => ReactDOM.render(<Test />, rootNode), 2000);