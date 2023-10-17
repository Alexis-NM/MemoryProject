import { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

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
const [choiceOne, setChoiceOne] = useState(null)
const [choiseTwo, setChoiceTwo] = useState(null)


  // shuffle cards

  const shuffleCards = () => {
    
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id : Math.random() }))
  
    setCards(shuffledCards)   
    setTurns(0)
    }

//handle a choice

const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

// reset choices & increase turn

const resetTiurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
}

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick ={shuffleCards}>New Game</button>
     
      <div className= "card-grid">
      {cards.map(card => (
        <SingleCard 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
        />
        ))}
      </div>
    </div>
  );
}

export default App