import React from 'react'

function List({person}) {
  return (
    <div>
        <h4>
            I am {person.name}, I am {person.age} years old, I know {person.skill} 
        </h4>
    </div>
  )
}

export default List