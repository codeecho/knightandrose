import 'typeface-arizonia';
import './App.css';

import React, {Component} from 'react';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Terms from './pages/Terms';
import Gallery from './pages/Gallery';

class App extends Component {
  render() {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <span className="brand">Knight & Rose</span>
                    <span className="telephone"><Glyphicon glyph="earphone" />07525139179</span>
                </div>
            </div>
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="#/">Home</NavItem>
                  <NavItem eventKey={3} href="#/about">About Me</NavItem>                                 
                  <NavItem eventKey={3} href="#/howitworks">How it Works</NavItem>                                                   
                  <NavItem eventKey={4} href="#/gallery">Gallery</NavItem>               
                  <NavItem eventKey={4} href="#/terms">Terms & Conditions</NavItem>                  
                  <NavItem eventKey={6} href="#/contact">Contact Me</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div className="background">
                <div className="container main-content">
                    <Router>
                        <Switch>
                            <Route path="/" exact={true} render={(props) => <Home {...props} />} />
                            <Route path="/about" exact={true} render={(props) => <About {...props} />} />
                            <Route path="/howitworks" exact={true} render={(props) => <HowItWorks {...props} />} />                
                            <Route path="/gallery" exact={true} render={(props) => <Gallery {...props} />} />                
                            <Route path="/terms" exact={true} render={(props) => <Terms {...props} />} />                                        
                            <Route path="/contact" exact={true} render={(props) => <Home {...props} />} />                                
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    )
  }
}

export default App
