import React from 'react';
import { render } from "react-dom";
import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {
  // return React.createElement("div", { id: "important" }, [
  //   React.createElement("h1", {}, "Adopt me"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),

  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, { name: "DOink", animal: "Cat", breed: "Mixed" }),
  // ]);


  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <SearchParams />
    </div>
  )
};

render(<App />, document.getElementById("root"));

