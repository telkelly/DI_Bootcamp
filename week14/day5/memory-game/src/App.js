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
  }, [])

   

  const handleCardClick = (id) => {
    const clickedSuperhero = superheroes.find(superhero => superhero.id === id);

    if (clickedSuperhero.clicked) {
      setScore(0);
      shuffleCards();
      resetClickedStatus();
    } else {
      setScore(score + 1);
      shuffleCards();
      updateClickedStatus(id);
    }
  };

  const shuffleCards = () => {
    const shuffledSuperheroes = [...superheroes];
    for (let i = shuffledSuperheroes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSuperheroes[i], shuffledSuperheroes[j]] = [
        shuffledSuperheroes[j],
        shuffledSuperheroes[i],
      ];
    }
    setSuperheroes(shuffledSuperheroes);
  };

  const resetClickedStatus = () => {
    setSuperheroes((prevSuperheroes) =>
      prevSuperheroes.map((superhero) => ({
        ...superhero,
        clicked: false,
      }))
    );
  };

  const updateClickedStatus = (id) => {
    setSuperheroes((prevSuperheroes) =>
      prevSuperheroes.map((superhero) => {
        if (superhero.id === id) {
          return {
            ...superhero,
            clicked: true,
          };
        }
        return superhero;
      })
    );
  };

 

  useEffect(() => {
    if (score > topScore) {
      setTopScore(score);
    }
  }, [score, topScore]);


  return (
    <div className="cards">
      <nav>
        <h2>Current Score: {score}</h2>
        <h2>Top Score: {topScore}</h2>
      </nav>
      {superheroes.map((superhero) => (
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
