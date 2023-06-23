import React from "react";
import UserFavoriteColors from "./UserFavoriteColors";
import "./App.css";
import "./Exercise4";
import Exercise4 from "./Exercise4";

const noJSX = React.createElement("h1", null, "I do not use JSX");
const myelement = <h1>I love JSX!</h1>;
const sum = 5 + 5;

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  return (
    <>
      {noJSX}
      {myelement}
      <h3>React is {sum} times better with JSX</h3>

      <h3>
        {user.firstName} {user.lastName}
        <UserFavoriteColors colors={user.favAnimals} />
      </h3>
      <Exercise4 />
    </>
  );
}

export default App;
