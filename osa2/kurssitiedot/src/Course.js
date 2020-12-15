import React from 'react'

const Header = ({name}) => {
    return <h1>{name}</h1>
  }
  
  const Total = ({course}) =>{
    return course.parts.reduce((sum,part) => {return sum + part.exercises}, 0)
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name} />
        {course.parts.map(part => <p key={part.id}> {part.name} {part.exercises} </p>)}
        <p>Harjoituksia yhteensä <Total course={course}/></p>
      </div>
    )
  }

export default Course
