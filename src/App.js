import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, 
         faPaperPlane, 
         faExchangeAlt, 
         faBriefcase,
         faCalendarCheck,
         faProjectDiagram,
         faHeartbeat,
         faClock,
         faFileAlt,
         faShoppingCart,
         faBoxes,
         faPlane,
         faMoneyBillAlt,
         faChartLine,
         faFileInvoice,   
         faLocationArrow          
          } from '@fortawesome/free-solid-svg-icons';
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import 'normalize.css';
import Header from './Client/Components/WebContainer/HeaderContainer';
import Footer from './Client/Components/WebContainer/FooterContainer';
import Routes from './Client/Routes/index';

library.add(
  fab, 
  faBars, 
  faPaperPlane,
  faExchangeAlt, 
  faBriefcase,
  faCalendarCheck,
  faProjectDiagram,
  faHeartbeat,
  faClock,
  faFileAlt,
  faShoppingCart,
  faBoxes,
  faPlane,
  faMoneyBillAlt,
  faChartLine,
  faFileInvoice,
  faLocationArrow
)

const App = () => (
  <div>
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default App;

