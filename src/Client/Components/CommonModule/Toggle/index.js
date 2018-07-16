import React, { Component } from 'react';
import './toggle.css';




class Accordion extends Component {
    render() {
      const { title, content, expand, onClick } = this.props;
      return (
        <div>
          <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
            {title}
          </dt>
          <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
            {content}
          </dd>
        </div>
      );
      
    }
  }

  
  
export default Accordion;