import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from '../../Components/WebContainer/HomeContainer';
import AboutUsScreen from '../../Screen/Web/AboutUsScreen';
import SupportScreen from '../../Screen/Web/SupportScreen';
import BlogScreen from '../../Screen/Web/BlogScreen';
//import ContactUsScreen from '../../Screen/Web/ContactUsScreen';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Web = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomeContainer}/>
      <Route path='/about' component={AboutUsScreen}/>
      <Route path='/support' component={SupportScreen}/>
      <Route path='/blog' component={BlogScreen}/>
      {/* <Route path='/contact' component={ContactUsScreen}/> */}
    </Switch>
  </main>
)

export default Web;
