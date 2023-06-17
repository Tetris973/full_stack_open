import React from 'react'
import Person from './Person'

const FilteredPersons = ({ persons, filter, handleDelete }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {filteredPersons.length === 0 ? (
        <div>There are no persons</div>
      ) : (
        filteredPersons.map((person) => (
          <Person
            key={person.id}
            person={person}
            handleDelete={() => handleDelete(person.id)}
          />
        ))
      )}
    </div>
  )
}

export default FilteredPersons
