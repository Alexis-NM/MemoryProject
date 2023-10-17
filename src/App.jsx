import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
{"src" : "img/1.jpg", matched : false },
{"src" : "img/2.jpg", matched : false },
{"src" : "img/3.jpg", matched : false },
{"src" : "img/4.jpg", matched : false },
{"src" : "img/5.jpg", matched : false },
{"src" : "img/6.jpg", matched : false },
{"src" : "img/7.jpg", matched : false },
{"src" : "img/8.jpg", matched : false },
]

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
const [choiceTwo, setChoiceTwo] = useState(null)


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

//compare 2 selected card

useEffect(()=> {
  if (choiceOne && choiceTwo) {

    if (choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choiceOne.src) {
            return {...card, matched: true}
          } else {
            return card
          }
        })
      })
      resetTurn()
    }else {
      setTimeout(() => resetTurn(), 1000)
  }
}
}, [choiceOne, choiceTwo])

// reset choices & increase turn

const resetTurn = () => {
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
            flipped={card === choiceOne || card === choiceTwo || card.matched}
        />
        ))}
      </div>
    </div>
  );
}

export default App