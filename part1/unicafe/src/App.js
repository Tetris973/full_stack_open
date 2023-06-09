import { useState } from 'react'
import { nanoid } from 'nanoid';

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Statistic = ({name, count}) => {
  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {count}
      </td>
    </tr>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Buttons = (props) => (
  <div>
    {props.dict.map((couple) => {
      return <Button key={couple.id} handleClick={couple.handleClick} text={couple.text}/>
    })}
  </div>
);


const Statistics = (props) => {
  if (props.dict.every((couple) => couple.count === 0)) {
    return (
      <div><p>No feedback given</p></div>
    )
  }
  else {
    const sum = props.dict.reduce((sum, couple) => sum + couple.count, 0);
    const good = props.dict[0].count;
    const neutral = props.dict[1].count;
    const bad = props.dict[2].count;

    return (
      <div>
        <table>
          <tbody>
            {props.dict.map((couple) => {
              return <Statistic key={couple.id} name={couple.name} count={couple.count}/>
            })}
            <Total nb={sum}/>
            <Average good={good} neutral={neutral} bad={bad}/>
            <Positive good={good} neutral={neutral} bad={bad}/>
          </tbody>
        </table>
      </div>
    )
  }
}

const Total = (props) => {
  return (
    <tr>
      <td>
        all
      </td>
      <td>
        {props.nb}
      </td>
    </tr>
  )
}

const Average = (props) => {
  const {good, neutral, bad} = props
  let sum = good + neutral + bad
  let average = sum === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / sum
  return (
    <tr>
      <td>
        average
      </td>
      <td>
        {average}
      </td>
    </tr>
  )
}

const Positive = (props) => {
  const {good, neutral, bad} = props
  let sum = good + neutral + bad
  let positive = sum === 0 ? 0 : good / sum * 100
  return (
    <tr>
      <td>
        positive
      </td>
      <td>
        {positive} %
      </td>
    </tr>
  )
}




const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const buttonsData = [
    {
      id: nanoid(),
      handleClick: () => setGood(good + 1),
      text: "good"
    },
    {
      id: nanoid(),
      handleClick: () => setNeutral(neutral + 1),
      text: "neutral"
    },
    {
      id: nanoid(),
      handleClick: () => setBad(bad + 1),
      text: "bad"
    }
  ];
  
  const statisticsData = [
    {
      id: nanoid(),
      name: "good",
      count: good
    },
    {
      id: nanoid(),
      name: "neutral",
      count: neutral
    },
    {
      id: nanoid(),
      name: "bad",
      count: bad
    }
  ];

  return (
    <div>
      <Header course="give feedback"/>
      <Buttons dict={buttonsData}/>
      <Header course="statistics"/>
      <Statistics dict={statisticsData}/>
    </div>
  )
}

export default App
