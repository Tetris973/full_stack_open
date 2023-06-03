const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p> {props.name} {props.exercice} </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      {props.dict.map((couple) => {
        return <Part name={couple.name} exercice={couple.exercice}/>
      })}
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.nb}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const dict = [
    {
      "name": part1,
      "exercice": exercises1
    },
    {
      "name": part2,
      "exercice": exercises2
    },
    {
      "name": part3,
      "exercice": exercises3
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content dict={dict}/>
      <Total nb={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

/*
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
*/

export default App