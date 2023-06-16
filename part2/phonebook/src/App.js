import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import FilteredPersons from './components/FilteredPersons'
import PersonForm from './components/PersonForm'
import FilterInput from './components/FilterInput'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://192.168.1.107:3001/persons').then((response) => {
      setPersons(response.data)
    })
  }, [])

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
      <FilterInput
        filter={filter}
        handleFilterChange={(event) => setFilter(event.target.value)}
      />
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
