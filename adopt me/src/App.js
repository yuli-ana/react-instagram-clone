import React from 'react';
import { render } from "react-dom";
import Pet from './Pet';

const App = () => {
  return React.createElement("div", { id: "important" }, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),

    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "DOink", animal: "Cat", breed: "Mixed" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));

