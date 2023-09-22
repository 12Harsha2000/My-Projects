import React from 'react'

function Greeting(props){
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
    </div>
  )
}

export default Greeting

//here pass data through properties from parent to child