import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const initialPoints = new Array(props.anecdotes.length).fill(0)
  const [points, setPoints] = useState(initialPoints)
  console.log(points)

  const maxPoints = Math.max(...points)
  console.log(maxPoints);
  const winner = points.findIndex(element => element === maxPoints)


  const setVoteCounter = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }


  const setAnecdote = () => {
    //newAnecdotes == anecdotes[index]
    const newAnecdote = Math.floor(Math.random() * anecdotes.length)
    //console.log(newAnecdote)
    setSelected(newAnecdote)

  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <h4> has {points[selected]} votes</h4>
      <div>
        <Button handleClick={() => setVoteCounter()} text="vote" />
        <Button handleClick={() => setAnecdote()} text="next anecdote" />
      </div>
      <h1>Anecdote with the most votes</h1>
      {props.anecdotes[winner]}
      <h4> has {points[winner]} votes</h4>

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
