import React from "react";
import { AppContext } from "../context/AppContextProvider";

export default function ContainerFunc() {
  return (
   <AppContext.Consumer>
    {(name) => {
       return <div>{name}</div>;
    }}
   </AppContext.Consumer>
   );
  }