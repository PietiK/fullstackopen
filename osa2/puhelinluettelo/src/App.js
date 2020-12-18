import React, { useState } from 'react'
import Filter from './Filter'
import Person from './Person'
import PersonForm from './AddPerson'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [personFilter, setPersonFilter] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
      event.preventDefault()
      const personObject = {name: newName, number: newNumber}
      const onko = persons.filter(person => person.name === newName)
      if (onko.length > 0) {
        window.alert(`${newName} on jo puhelinluettelossa`)
      }
      else {
        setPersons(persons.concat(personObject))
        console.log(persons)
      }
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setPersonFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} personFilter={personFilter}/>
      <PersonForm 
        handlenamechange={handleNameChange} 
        newname={newName} 
        newnumber={newNumber} 
        addperson={addPerson} 
        handlenumberchange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Person persons={persons} personFilter={personFilter}/>
    </div>
  )

}

export default App