import Part from "./Part"

const Content = (props) => {
    return(
      <div>
        {props.dict.map((couple) => {
          return <Part key={couple.id} name={couple.name} exercice={couple.exercises}/>
        })}
      </div>
    )
  }

  export default Content