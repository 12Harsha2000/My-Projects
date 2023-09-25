import React from "react";
import { AppContext } from "../context/AppContextProvider";

export default function ContainerFunc() {
  return (
   <AppContext.Consumer>
    {({toggleAuth, isAuth }) => {
       return (
         <button onClick={toggleAuth}>{isAuth ? "Log out" : "Log In"}</button>
       );
    }}
   </AppContext.Consumer>
   );
  }   