import React, { Component } from 'react';
import { css, ThemeProvider } from 'styled-components';
import FeaturesCard from '../FeaturesCard';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';

class FeaturesCarousel extends Component {
render () {
      return (
        <ThemeProvider theme={Themes}>
        <Carousel
        infinite
        slidesPerPage={4}
        slidesPerScroll={4}
        autoPlay={5000}
        arrowLeft={<FontAwesomeIcon icon='angle-left' size='4x' style={{ color:'#ffa91f' }}/>}
        arrowRight={<FontAwesomeIcon icon='angle-right'size='4x'style={{ color:'#ffa91f'}}/>}
        addArrowClickHandler
        breakpoints={{
            1000: { // these props will be applied when screen width is less than 1000px
              slidesPerPage: 2,
              slidesPerScroll: 2,
              clickToChange: true,
            },
            768: {
              slidesPerPage: 1,
              slidesPerScroll: 1,
              clickToChange: true,
              animationSpeed: 2000,
            },
        }}
        >
            <FeaturesCard 
            iconName = "paper-plane"
            title = "Replace Paper Forms and Processes"
            text = "Eliminate stacks of paper, double handling and errors. EasyForms can automate your paper forms and processes into an easy-to-use app-based solution, streamlining your existing processes while mobilising your business effortlessly."
            />
            <FeaturesCard 
            iconName = "paper-plane"
            title = "Connecting Office-to-Field Workers"
            text = "Increase connectivity to office-to-field workers and vice versa"
            />
            <FeaturesCard 
            iconName = "paper-plane"
            title = "Job management"
            text = "Eliminate stacks of paper, double handling and errors. EasyForms can automate your paper forms and processes into an easy-to-use app-based solution, streamlining your existing processes while mobilising your business effortlessly."
            />
            <FeaturesCard 
            iconName = "paper-plane"
            title = "Replace Paper Forms and Processes"
            text = "Eliminate stacks of paper, double handling and errors. EasyForms can automate your paper forms and processes into an easy-to-use app-based solution, streamlining your existing processes while mobilising your business effortlessly."
            />
            <FeaturesCard 
            iconName = "paper-plane"
            title = "Replace Paper Forms and Processes"
            text = "Eliminate stacks of paper, double handling and errors. EasyForms can automate your paper forms and processes into an easy-to-use app-based solution, streamlining your existing processes while mobilising your business effortlessly."
            />
            <FeaturesCard 
            iconName = "paper-plane"
            title = "Replace Paper Forms and Processes"
            text = "Eliminate stacks of paper, double handling and errors. EasyForms can automate your paper forms and processes into an easy-to-use app-based solution, streamlining your existing processes while mobilising your business effortlessly."
            />
            <FeaturesCard 
            iconName = "paper-plane"
            title = "Replace Paper Forms and Processes"
            text = "Eliminate stacks of paper, double handling and errors. EasyForms can automate your paper forms and processes into an easy-to-use app-based solution, streamlining your existing processes while mobilising your business effortlessly."
            />
            <FeaturesCard 
            iconName = "paper-plane"
            title = "Replace Paper Forms and Processes"
            text = "Eliminate stacks of paper, double handling and errors. EasyForms can automate your paper forms and processes into an easy-to-use app-based solution, streamlining your existing processes while mobilising your business effortlessly."
            />
            <FeaturesCard 
            iconName = "paper-plane"
            title = "Replace Paper Forms and Processes"
            text = "Eliminate stacks of paper, double handling and errors. EasyForms can automate your paper forms and processes into an easy-to-use app-based solution, streamlining your existing processes while mobilising your business effortlessly."
            />
            
        </Carousel>
        </ ThemeProvider>
      );
    }
  }

export default FeaturesCarousel;