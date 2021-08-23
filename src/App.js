import "./App.css";
// import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./components/Pages/SignIn";
import { SignUp } from "./components/Pages/SignUp";
import { User } from "./components/Pages/User";

function App() {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <div className="pages">
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/user" component={User} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
