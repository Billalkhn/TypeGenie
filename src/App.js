import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./Components/Signin";
import SignUp from "./Components/Signup";
import Editor from "./Components/editor"

function App() {
  return (
    <Router>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route  path="/sign-in" component={SignIn} />
            <Route  path="/sign-up" component={SignUp} />
            <Route  path="/editor" component={Editor} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
