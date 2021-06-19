import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import "./icons.js";
import Homepage from "./screens/Homepage";
import Addproperty from "./screens/Addproperty";
import { AuthProvider, useAuth} from "./contexts/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Search from "./components/Search";
import AddProperty from "./components/AddProperty";
import SearchResult from "./components/SearchResult";
import Signup from "./components/Signup";
import Homepagelogin from "./components/Homepagelogin";
import "./style.css";

function App() {
  return (
    <AuthProvider>
      
    <Router>
    <Switch>
      <Route exact path="/" component={Homepagelogin} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/Homepage" component={Homepage}/>
              <Route path="/About" component={About} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/AddProperty" component={AddProperty} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Search" component={Search} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/SearchResult" component={SearchResult} />
              <Router>
              <PrivateRoute path="/Dashboard/" exact component={Dashboard} />

    </Router>
    </Switch>
    </Router>
    
    </AuthProvider>
  );
}

export default App;