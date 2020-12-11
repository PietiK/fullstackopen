import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.all === 0) return <tbody><tr><th>No feedback given</th></tr></tbody>

  else return (
        <tbody>
        <tr><td>Good</td><td>{props.good}</td></tr> 
        <tr><td>Neutral</td><td>{props.neutral}</td></tr> 
        <tr><td>Bad</td><td>{props.bad}</td></tr> 
        <tr><td>All</td><td>{props.all}</td></tr> 
        <tr><td>Average</td><td>{props.average}</td></tr> 
        <tr><td>Positive</td><td>{props.positive}%</td></tr> 
        </tbody>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState (0)
  const [neutral, setNeutral] = useState (0)
  const [bad, setBad] = useState (0)
  const [all, setAll] = useState (0)


  const handleGoodClick = () => {
    const newGood = good + 1
    setGood(newGood)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    setBad(newBad)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text='Good'/>
      <Button onClick={handleNeutralClick} text='Neutral'/>
      <Button onClick={handleBadClick} text='Bad'/>
      <p></p>
      <h2>Stats</h2>
      <table>
        <Statistics
          good={good} neutral={neutral} bad={bad} all={all} average={(good-bad)/all} positive={good/all*100}
        />
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)