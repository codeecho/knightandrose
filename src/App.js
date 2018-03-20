import './App.css'

import React, {Component} from 'react';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  render() {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <span className="brand">Knight & Rose</span>
                </div>
            </div>
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="#/">Home</NavItem>
                  <NavItem eventKey={2} href="#/services">Services</NavItem>
                  <NavItem eventKey={3} href="#/about">About Me</NavItem>                                 
                  <NavItem eventKey={4} href="#/gallery">Gallery</NavItem>
                  <NavItem eventKey={5} href="#/testimonials">Testimonials</NavItem>                  
                  <NavItem eventKey={6} href="#/contact">Contact Me</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Router>
                <Switch>
                    <Route path="/" exact={true} render={(props) => <Home {...props} />} />
                    <Route path="/services" exact={true} render={(props) => <Home {...props} />} />
                    <Route path="/about" exact={true} render={(props) => <About {...props} />} />
                    <Route path="/gallery" exact={true} render={(props) => <Home {...props} />} />                
                    <Route path="/testimonials" exact={true} render={(props) => <Home {...props} />} />                
                    <Route path="/contact" exact={true} render={(props) => <Home {...props} />} />                                
                </Switch>
            </Router>
        </div>
    )
  }
}

export default App
