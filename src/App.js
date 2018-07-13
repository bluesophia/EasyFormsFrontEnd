import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faAngleLeft, faAngleRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import 'normalize.css';
import Header from './Client/Components/WebContainer/HeaderContainer';
import Footer from './Client/Components/WebContainer/FooterContainer';
import Routes from './Client/Routes/index';

library.add(fab, faBars, faAngleLeft, faAngleRight, faPaperPlane)

const App = () => (
  <div>
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default App;

