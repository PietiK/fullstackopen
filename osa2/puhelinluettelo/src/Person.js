import React from 'react'

const Person = ({persons, personFilter}) => {
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(personFilter))
  return (
    <div>
      {personsToShow.map(person => <p key={person.name}> {person.name} {person.number}</p>)}
    </div>
  )
}

export default Person