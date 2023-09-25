 import React from "react";
import { AppContext } from "../context/AppContextProvider";

class Container extends React.Component {
  static contextType = AppContext;

  render() {
    const { isAuth, toggleAuth } = this.context;

    return <div>{isAuth ? "LoggedIn" : "LoggedOut"}</div>;
  }
}

export default Container;
