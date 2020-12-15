import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    new Array(anecdotes.length).fill(0))
  const [numero, setNumero] = useState(0)

  const handleSeuraavaClick = () => {
    setNumero(Math.floor(Math.random() * anecdotes.length))
    setSelected(numero)
  }

  const handleVoteClick = () => {
    const vanha = votes[selected]
    const pisteet = [...votes]
    pisteet[selected] = vanha + 1
    setVotes(pisteet)
  }

  return (
    <div>
      <h1>Päivän anekdootti</h1>
      <p></p>
      {props.anecdotes[selected]}
      <p>Votes: {votes[selected]}</p>
      <Button onClick={handleSeuraavaClick} text='Seuraava'/>
      <Button onClick={handleVoteClick} text='Vote'/>
      <p></p>
      <h2>Suosituin anekdootti</h2>
      {props.anecdotes[votes.indexOf(Math.max(...votes))]}
      <p>Äänimäärä {Math.max(...votes)}</p>
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