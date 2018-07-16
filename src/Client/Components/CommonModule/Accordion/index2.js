import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import ToggleButton from '../../../../Assets/Images/arrow.png';
import BigTitle from '../../../Components/Common/Title/BigTitle.js';
import Section01Bg from '../../../../Assets/Images/blog_1.jpg';
import './toggle.css';


class Accordion extends Component {
    render() {
      const { title, content, expand, onClick } = this.props;
      return (
        <ThemeProvider theme={Themes}>
          <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
            <p>{title}</p>
          </dt>
          <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
            <p>{content}</p>
          </dd>
        </ThemeProvider>

        
      );
      
    }
  }

export default Accordion;