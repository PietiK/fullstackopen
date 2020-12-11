import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([
    {id: 0, value: 0},
    {id: 1, value: 0},
    {id: 2, value: 0},
    {id: 3, value: 0},
    {id: 4, value: 0},
    {id: 5, value: 0},
    {id: 6, value: 0},
  ]
  )

  const handleClick = () => {
    const numero = Math.floor(Math.random() * 5)
    console.log(numero)
    console.log(votes, votes.numero, votes.value)
    const pisteet = {...votes}
    setSelected(numero)
    setVotes(pisteet)
  }

  return (
    <div>
      <Button onClick={handleClick} text='Seuraava'/>
      <p></p>
      {props.anecdotes[selected]}
      <p>Votes: {votes.numero}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)