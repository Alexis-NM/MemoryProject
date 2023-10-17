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

const [cards, setCards] = useState


  // shuffle cards
  const shuffleCards = () => {
    
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id : Math.random() }))
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App