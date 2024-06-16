import Persons from './components/persons'
import Filter from './components/filter'
import PersonForm from './components/personform'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

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