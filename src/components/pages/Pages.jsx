import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../common/Header'
import Home from "../home/Home"
import About from './About'
import { Blog } from "./Blog"
import { Contact } from "./Contact"
import { Services } from './Service'


const Pages = () => {
  return (
    <>
    <Router>
        <Header />
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/blog" component={Blog}/>
       </Switch>
    </Router>
    
    
    </>
  )
}

export default Pages