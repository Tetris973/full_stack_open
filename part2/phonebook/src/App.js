import { useState, useEffect } from 'react'
import FilteredPersons from './components/FilteredPersons'
import PersonForm from './components/PersonForm'
import FilterInput from './components/FilterInput'
import personsService from './services/persons'
import Notification from './components/Notification'

const types = {
  SUCCESS: 'success',
  ERROR: 'error',
}

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('App is running')
  const [messageType, setMessageType] = useState(types.SUCCESS)

  const notification = (message, type) => {
    setMessage(message)
    setMessageType(type)
    setTimeout(() => {
      setMessage(null)
      setMessageType(null)
    }, 2500)
  }

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  const handleAddPerson = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      // update phone number
      const person = persons.find((person) => person.name === newName)
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
      if (result) {
        const changedPerson = { ...person, number: newNumber }
        personsService
          .update(person.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            )
            notification(`Updated ${returnedPerson.name}`, types.SUCCESS)
          })
          .catch((error) => {
            notification(
              `Information of ${person.name} has already been removed from server`,
              types.ERROR
            )
            setPersons(persons.filter((p) => p.id !== person.id))
          })
      }
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
    }

    personsService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
      notification(`Added ${returnedPerson.name}`, types.SUCCESS)
    })
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (id) => {
    const person = persons.find((person) => person.id === id)
    const result = window.confirm(`Delete ${person.name}?`)
    if (result) {
      personsService
        .deletePerson(id)
        .then((response) => {
          setPersons(persons.filter((person) => person.id !== id))
          notification(`Deleted ${person.name}`, types.SUCCESS)
        })
        .catch((error) => {
          notification(
            `Information of ${person.name} has already been removed from server`,
            types.ERROR
          )
          setPersons(persons.filter((person) => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={messageType} />
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
        <FilteredPersons persons={persons} filter={filter} handleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default App
