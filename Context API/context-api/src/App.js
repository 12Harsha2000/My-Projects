// import "./styles.css";
// import Reuse from "./Reuse";
// import Container from "./components/Container";
// import ContainerFunc from "./components/ContainerFunc";


// export default function App() {
//   return (
//     <div classname="App">
//       <h1>Context API</h1>
//       <Container />
//       <ContainerFunc />
//     </div>
//   );
// }

import React from "react";
import "./styles.css";
import Container from "./components/Container";
import ContainerFunc from "./components/ContainerFunc";
import AppContextProvider from "./context/AppContextProvider"; // Added import

export default function App() {
  return (
    <div className="App"> {/* Changed "classname" to "className" */}
      <h1>Context API</h1>
      <AppContextProvider> {/* Wrapped the components with AppContextProvider */}
        <Container />
        <ContainerFunc />
      </AppContextProvider>
    </div>
  );
}

