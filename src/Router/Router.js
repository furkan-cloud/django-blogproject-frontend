import React, {useContext} from "react";
// import "./App.css";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";
import Navbar from "../components/navbar";
import AuthContext from "../context/AuthContext";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function AppRouter() {
    // const { currentUser } = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <SignUp /> */}

      </div>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path={`/Detail`}>
            <Detail />
          </Route>
          <Route path="/">
            <Main />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;


        // route // signin // signup // forgetpassword