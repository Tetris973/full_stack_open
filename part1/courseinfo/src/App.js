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
        return <Part name={couple.name} exercice={couple.exercises}/>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name}/>
      <Content dict={course.parts}/>
      <Total nb={course.parts.reduce((sum, part) => sum + part.exercises, 0)
}/>
    </div>
  )
}


export default App