// import React from "react";

// function App(){
//   let user=[
//     {name:'Nila',id:1},
//     {name:'Niya',id:2},
//     {name:'Nima',id:3},
//     {name:'Nita',id:4},
//   ]
//   return(
//     <div className="App">
//       <h1>React Dynamic Routing</h1>
//       {
//         user.map((item)=>
//         <div><a href="/user">{item.name}</a></div>)
//       }
//     </div>
//   );
// }

// export default App;

// v need t he value to b displayed in the webpage as in the url..

// import React from "react";

// function App(){
//   let user=[
//     {name:'Nila',id:1},
//     {name:'Niya',id:2},
//     {name:'Nima',id:3},
//     {name:'Nita',id:4},
//   ]
//   return(
//     <div className="App">
//       <h1>React Dynamic Routing</h1>
//       {
//         user.map((item)=>
//         <div><a href={"/user/"+item.id}>{item.name}</a></div>)
//       }
//     </div>
//   );
// }

// export default App;



// list is actually Refreshing so...

// import React from "react";
// import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
// import User from './User'

// function App(){
//   let user=[
//     {name:'Nila',id:1},
//     {name:'Niya',id:2},
//     {name:'Nima',id:3},
//     {name:'Nita',id:4},
//   ]
//   return(
//     <div className="App">
//       <Router>
//       <h1>React Dynamic Routing</h1>
//       {
//         user.map((item)=>
//         <div><Link to={"/user/"+item.id}>{item.name}</Link></div>)
//       }
//       <User />
//       </Router>
//     </div>
//   )
// }

// export default App;



// but it is not defined with the routes
// to define it....

import React from "react";
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from './User'

function App(){
  let user=[
    {name:'Nila',id:1},
    {name:'Niya',id:2},
    {name:'Nima',id:3},
    {name:'Nita',id:4},
  ]
  return(
    <div className="App">
      <Router>
      <h1>React Dynamic Routing</h1>
      {
        user.map((item)=>
      <div><Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link></div>)
      }
      <Route path="/user/:id/:name"><User /></Route>
      </Router>
    </div>
  )
}

export default App;