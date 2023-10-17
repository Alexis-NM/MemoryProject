import { useState } from 'react'
import './App.css'

const cardImages = [
{"src" : "../public/img/6.png"},
{"src" : "../public/img/38.png"},
{"src" : "../public/img/55.png"},
{"src" : "../public/img/65.png"},
{"src" : "../public/img/94.png"},
{"src" : "../public/img/106.png"},
{"src" : "../public/img/131.png"},
{"src" : "../public/img/143.png"},
]

function App() {

const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)


  // shuffle cards

  const shuffleCards = () => {
    
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id : Math.random() }))
  
    setCards(shuffledCards)   
    setTurns(0)
    }

    console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick ={shuffleCards}>New Game</button>
     
      <div className= "card-grid">
      {cards.map(card => (
      <div className="card" key={card.id}>
        <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="../public/img/Back.jpg" alt="card back" />
        </div>
      </div>
        ))}
      </div>
    </div>
  );
}

export default App