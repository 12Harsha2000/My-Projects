import React from "react";
import { AppContext } from "../context/AppContextProvider";

class container extends React.Component {
   render() {
      console.log(this.context);
      const { isAuth, toggleAuth } = this.context;
      return (
       <div>{isAuth ? "LoggedIn" : "LoggedOut"}</div>
      );
   } 
}
Container.contextType = AppContext;

export default Container;
