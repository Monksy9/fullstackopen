import { useState } from 'react'
import Persons from './components/persons'
import Filter from './components/filter'
import PersonForm from './components/personform'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    console.log('New name to add:', newName);

    if (persons.some(person => person.name.trim() === newName.trim())) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNewSearch = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2> Phonebook</h2>
      <Filter searchValue={newSearch} handleSearch={handleNewSearch}></Filter>

      <h3>Add a new</h3>
      <PersonForm onsubmit={addName} newname={newName} namechange={handleNameChange} newnumber={newNumber} numberchange={handleNumberChange}></PersonForm>
      <h3>Numbers</h3>
      <Persons persons={persons} search={newSearch}></Persons>

    </div>
  )
}

export default App