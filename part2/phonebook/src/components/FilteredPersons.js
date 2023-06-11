import React from 'react'

const FilteredPersons = ({ persons, filter }) => {
  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      {filteredPersons.length === 0 ? (
        <div>There are no persons</div>
      ) : (
        filteredPersons.map((person) => (
          <div key={person.id}>
            {person.name} - {person.number}
          </div>
        ))
      )}
    </div>
  )
}

export default FilteredPersons
