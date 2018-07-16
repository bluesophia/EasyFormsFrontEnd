import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeScreen from '../Screen/HomeScreen';
import AboutUsScreen from '../Screen/AboutUsScreen';
import SupportScreen from '../Screen/SupportScreen';
import BlogScreen from '../Screen/BlogScreen';
import ContactUsScreen from '../Screen/ContactUsScreen';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Web = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomeScreen}/>
      <Route path='/about' component={AboutUsScreen}/>
      <Route path='/support' component={SupportScreen}/>
      <Route path='/blog' component={BlogScreen}/>
      <Route path='/contact' component={ContactUsScreen}/>
    </Switch>
  </main>
)

export default Web;