import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 'normalize.css';
import Header from './Client/Components/WebContainer/HeaderContainer';
import Footer from './Client/Components/WebContainer/FooterContainer';

library.add(fab)

class App extends Component {

  render() {
    return (
      <div className="App">
       <Header />
       <Footer />
      </div>
    );
  }
}

export default App;
