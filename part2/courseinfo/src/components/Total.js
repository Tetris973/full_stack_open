const Total = (props) => {
    return (
      <div>
        <p>
          Number of exercises {props.nb.reduce((acc, cur) => acc + cur.exercises, 0)}
        </p>
      </div>
    )
  }

    export default Total