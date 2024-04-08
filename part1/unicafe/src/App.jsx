import { useState } from "react";

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine
          text="average"
          value={
            (props.good - props.bad) / (props.good + props.bad + props.neutral)
          }
        />
        <StatisticLine
          text="positive"
          value={(props.good / (props.good + props.bad + props.neutral)) * 100}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    );
  }
};

const DataTable = (props) => {
  return (
    <table>
      <thead></thead>
      <tbody>
      <tr>

        <td>good</td>
        <td>{props.good}</td>
      </tr>
      <tr> 
        <td>neutral</td>
        <td>{props.neutral}</td></tr>

       <tr> 
          <td>bad </td>
          <td>{props.bad}</td>
        </tr> 

        <tr> 
          <td>average </td>
          <td>{(props.good - props.bad) / (props.good + props.bad + props.neutral)} </td>
        </tr>

        <tr>
          <td>positive</td>
          <td>{(props.good / (props.good + props.bad + props.neutral)) * 100} </td>
        </tr>
        </tbody>
    </table>
  );
};

const Button = (props) => {
  return <button onClick={props.method}>{props.value}</button>;
};

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}{" "}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>

      <Button value="good" method={() => setGood(good + 1)}></Button>
      <Button value="neutral" method={() => setNeutral(neutral + 1)}></Button>
      <Button value="bad" method={() => setBad(bad + 1)}></Button>
      <h1>statistics</h1>
      <DataTable good={good} bad={bad} neutral={neutral}/>
    </div>
  );
};

export default App;
