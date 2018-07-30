import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
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
import 'normalize.css';
import Header from './Client/Components/WebContainer/HeaderContainer';
import Footer from './Client/Components/WebContainer/FooterContainer';
import Routes from './routes.js';

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

class App extends Component {  
  constructor() {
    super();
    this.state = { message: '' };
  }

  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }

  render(){
    return(
      <div>
          <Header />
          <Routes />
          <Footer />
      </div>
    )
  }
}

export default App;

