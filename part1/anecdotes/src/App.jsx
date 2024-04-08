import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [scores, setScores] = useState(new Array(anecdotes.length).fill(0));

  function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }

  const updateScores = () => {
    const new_scores = [ ...scores ];
    new_scores[selected] += 1;
    setScores(new_scores);
  };

  const highest_score = Math.max(...scores); 
  const highest_voted_index = scores.indexOf(highest_score);

  return (
    <div>
      <h1> Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div> has {scores[selected]} votes</div>
      <div>
        <button
          onClick={() => {
            setSelected(getRandomInt(anecdotes.length));
          }}
        >
          Next anecdote
        </button>
        <button onClick={updateScores}>vote</button>
      </div>
      <h1> Anecdote with the most votes </h1>
      <div>{highest_score > 0 ? anecdotes[highest_voted_index] : "No votes yet!"}</div> 
    </div>
  );
};

export default App;
