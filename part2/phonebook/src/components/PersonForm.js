import React from 'react'

const PersonForm = ({ newName, newNumber, handleAddPerson, handlePersonChange, handleNumberChange }) => {
  return (
    <div>
      <form onSubmit={handleAddPerson}>
        <div>
          name:
          <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
