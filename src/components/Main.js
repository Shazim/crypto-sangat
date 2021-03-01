import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
class Main extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./js/app.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} />;
            }}
          />
        </Switch>
      </main>
    );
  }
}
export default Main;
