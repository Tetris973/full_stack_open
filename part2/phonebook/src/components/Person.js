// person component
import React from 'react'

const Person = ({ person, handleDelete }) => {
  const { name, number } = person
  return (
    <div>
      {name} - {number}
      <button onClick={handleDelete} style={{ margin: '5px' }}>
        delete
      </button>
    </div>
  )
}

export default Person
