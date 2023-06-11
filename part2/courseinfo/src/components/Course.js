import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

  const Course = ({course}) => {
    return (
      <div>
        <Header title={course.name}/>
        <Content dict={course.parts}/>
        <Total nb={course.parts}/>
      </div>
    )
  }

    export default Course