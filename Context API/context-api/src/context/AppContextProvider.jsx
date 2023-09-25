import React from "react";

export const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "I'm from Context API",
      isAuth: false
    };
  }

  toggleAuth = () => {
    this.setState((prevState) => ({
      isAuth: !prevState.isAuth // Fix toggleAuth to update the opposite of the current value
    }));
  };

  render() {
    const { isAuth } = this.state;
    const { toggleAuth } = this;

    return (
      <AppContext.Provider value={{ isAuth, toggleAuth }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
