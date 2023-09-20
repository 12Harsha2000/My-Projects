import React from 'react'
import Card from './Card';

const data=[
  {
    name:'person1',
    location:'location1'
  },
  {
    name:'person2',
    location:'location2'
  },
  {
    name:'person3',
    location:'location3'
  }
]

function App() {
  const handleChange =(e)=>{
    console.log(e.target.value)
  }
  return (
    <div>
      <h1>React section</h1>
      {/* {
        [1,2,3,4,5].map(iteam =>
        <Card key={iteam}/>
  )
      } */}
      {
          data.map ((iteam,index) =>{
            return(
              <div key={index}>
                <h1>{iteam.name}</h1>
                </div>
            )
          })
      }
      <input placeholder="Enter something" onChange={handleChange}/>
    </div>
  )
}

export default App
