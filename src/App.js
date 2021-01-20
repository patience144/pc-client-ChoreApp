import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Nav from "./Nav";
import Welcome from "./Welcome";
import ChoreList from "./ChoreList";
import AddChore from "./AddChore";
import EditChore from "./EditChore";
import ChoresContext from "./context";
import api from "./api";
import "./style.css";
import "./App.css";

class App extends React.Component {
  state = { chores: [] };

  static contextType = ChoresContext;

  updateChores = (chores) => {
    let newState = this.state.chores;
    newState.chores = chores;
    this.setState({ chores });
  };

  render() {
    return (
      <main className="App">
        <Nav />
        <ChoresContext.Provider
          value={{
            chores: this.state.chores,
            updateChores: this.updateChores,
          }}
        >
          <Switch>
            <Route path={"/"} exact component={Welcome} />
            <Route path={"/about"} component={Welcome} />
            <Route
              path={"/chores"}
              render={() => <ChoreList chores={this.state.chores} />}
            />
            <Route
              path={"/add"}
              render={() => (
                <AddChore
                  chores={this.state.chores}
                  updateChores={this.updateChores}
                />
              )}
            />
            <Route
              path={"/edit/:choreID"}
              render={() => (
                <EditChore
                  chores={this.state.chores}
                  updateChores={this.updateChores}
                />
              )}
            />
          </Switch>
        </ChoresContext.Provider>
      </main>
    );
  }

  componentDidMount() {
    return api
      .getChores()
      .then((chores) => {
        this.setState({ chores });
      })
      .catch((error) => console.log({ error }));
  };
};

export default withRouter(App);
