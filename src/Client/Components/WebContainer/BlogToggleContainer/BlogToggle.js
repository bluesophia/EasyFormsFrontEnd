import React, { Component } from 'react';
import Accordion from '../../CommonModule/Toggle/index'

class BlogToggle extends Component {  
    constructor (props) {
      super(props);
      this.state = {
        block1: true,
        block2: false,
        block3: false,
      };
    }
    
    toggle = (index) => () => {
      this.setState({ [`block${index}`]: !this.state[`block${index}`] });
    }
    
    toggleExpand = (expand = false) => () => {
      this.setState({
        block1: expand,
        block2: expand,
        block3: expand,
      });
    }
    
    render() {
      const accordionList = [{ title: 'First Accordion' }, { title: 'Second Accordion' }, { title: 'Third Accordion' }];
      
      return <div className="container">
        <h1>Is Timesheet Theft Giving You a Constant Headache?</h1>
        <button type="button" className="btn" onClick={this.toggleExpand(true)}>Expand All</button>
        <button type="button" className="btn" onClick={this.toggleExpand()}>Collapse All</button>
        <dl className="accordion">
          {
            accordionList.map((item, index) => (
              <Accordion title={item.title} onClick={this.toggle(index + 1)} expand={this.state[`block${index+1}`]} />
            ))
          }
        </dl>
      </div>;
    }
  }