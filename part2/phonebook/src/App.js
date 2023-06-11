import { useState } from 'react'
import { nanoid } from 'nanoid'
import FilteredPersons from './components/FilteredPersons'
import PersonForm from './components/PersonForm'
import FilterInput from './components/FilterInput'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleAddPerson = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      addPerson()
    }
  }

  const addPerson = () => {
    if (newName === '') {
      alert('Please enter a name')
      return
    }
    if (newNumber === '') {
      alert('Please enter a number')
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: nanoid(),
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterInput filter={filter} handleFilterChange={(event) => setFilter(event.target.value)} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleAddPerson={handleAddPerson}
        handlePersonChange={(event) => setNewName(event.target.value)}
        handleNumberChange={(event) => setNewNumber(event.target.value)}
      />
      <h2>Numbers</h2>
      <div>
        <FilteredPersons persons={persons} filter={filter} />
      </div>
    </div>
  )
}

export default App
