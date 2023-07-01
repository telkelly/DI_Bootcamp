import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import cards from "./superheroes.json";

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  useEffect(() => {
    setSuperheroes(cards.superheroes)
  })

  const handleCardClick = () => {
    
  }
  
  return (
    <div className="cards">
      <nav>
        <h2>Current Score: {score}</h2>
        <h2>Top Score: {topScore}</h2>
      </nav>
      {superheroes.map(superhero => (
          <Card
            key={superhero.id}
            superhero={superhero}
            onClick={handleCardClick}
          />
        ))}
    </div>
  );
}

export default App;
