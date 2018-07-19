import React, { Component } from 'react';
import { css, ThemeProvider } from 'styled-components';
import Logo01 from '../../../../Assets/Images/ak_council.jpg';
import Logo02 from '../../../../Assets/Images/passrite.gif';
import Logo03 from '../../../../Assets/Images/toyota.gif';
import Card from '../Card';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowLeftIcon from '../Icons/iconLeft';
import ArrowRightIcon from '../Icons/iconRight';
import Themes from '../../../../Assets/Styles/Themes';

class CardCarousel extends Component {
render () {
      return (
        <ThemeProvider theme={Themes}>
        <Carousel
        infinite
        autoPlay={3000}
        arrowLeft={<ArrowLeftIcon />}
        arrowRight={<ArrowRightIcon />}
        addArrowClickHandler
        >
            <Card 
            logo = {Logo01}
            name = "Daniel Hadfield"
            companyName = "Licensing & Compliance Division, Auckland Council"
            text = "EasyForms have been a key factor in helping us to become a smarter, more mobile workforce and have worked alongside us to help move from a manual, paper based process, to an intelligent digital process."
            />
            <Card 
            logo = {Logo02}
            name = "Mark Chapman"
            companyName = "General Manager, Passrite"
            text = "EasyForms spent time with us understanding our structure and requirements and then delivered a great solution which cut our admin time and simplified the process for our assessors. This also improved our service to our customers."
            />
            <Card 
            logo = {Logo03}
            companyName = "Service Operations, Toyota"
            text = "EasyForms took the design of our survey/audit and built this into a user friendly interface. The other solutions that were investigated before using EasyForms often missed core functionality and were not flexible enough in the reporting space.  Many other systems provided some core functionality, but not the bespoke report outputs that we required."
            />
        </Carousel>
        </ ThemeProvider>
      );
    }
  }

export default CardCarousel;