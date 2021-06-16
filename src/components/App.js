import React, {useEffect, useState, useContext} from "react"
import Signup from "./Signup"
import { Container, Navbar,Button} from "react-bootstrap"
import { AuthProvider, useAuth} from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect, useHistory  } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import About from "./About"
import Contact from "./Contact"
import Search from "./Search"
import AddProperty from "./AddProperty"
import SearchResult from "./SearchResult"






export default function App (props){
  




  return (
    <div>
      <Router>
      


<Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav ml-auto">

            <li className="nav-item">
            <NavLink className="m-2" activeStyle={{ fontWeight: "bold", color: "#ADDBEA" }}  style={{color: 'white'}} activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="m-2" activeStyle={{ fontWeight: "bold", color: "#ADDBEA" }}  style={{color: 'white'}} activeClassName="active" to="/Contact">Contact</NavLink>
            </li>
            <li className="nav-item">
           
            <NavLink className="m-2" activeStyle={{ fontWeight: "bold", color: "#ADDBEA" }} style={{color: 'white'}} activeClassName="active" to="/About">About</NavLink>
            
            </li>
           
        </ul>
        <a className="navbar-brand mx-auto "  style={{alignContent:"center"}} href="#">Kurd Estate</a>
        
    </div>

    

    <div >
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <text className="nav-link mr bg-dark" style={{ marginLeft: '7rem' }} href="#">   </text>
        </li>
        <li className="nav-item">
        <NavLink className="m-2" activeStyle={{ fontWeight: "bold", color: "#ADDBEA" }} style={{color: 'white'}} activeClassName="active" to="/Search">Search</NavLink>
        </li>
        </ul>
    </div>
</Navbar>


 

        
       
        
        
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      
      <div className="w-100" style={{ maxWidth: "100" }}>
      
      <br />
      <br />
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/About" component={About} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/AddProperty" component={AddProperty} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Search" component={Search} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/SearchResult" component={SearchResult} />
            </Switch>
          </AuthProvider>
       
      </div>
    </Container>
    </Router>
    </div>
  )
}

