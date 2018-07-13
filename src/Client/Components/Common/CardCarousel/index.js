import React, { Component } from 'react';
import { css, ThemeProvider } from 'styled-components';
import Logo01 from '../../../../Assets/Images/ak_council.jpg';
import Card from '../Card';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';
import arrowLeftImg from '../../../../Assets/Images/arrowLeft.png';
import arrowRightImg from '../../../../Assets/Images/arrowRight.png';

class CardCarousel extends Component {
render () {
      return (
        <ThemeProvider theme={Themes}>
        <Carousel
        infinite
        autoPlay={3000}
        arrows
        // arrowLeft={<arrowLeftImg />}
        // arrowRight={<arrowRightImg />}
        // arrowLeft={<FontAwesomeIcon icon='angle-left' size='4x' style={{ color:'#ffa91f' }}/>}
        // arrowRight={<FontAwesomeIcon icon='angle-right'size='4x'style={{ color:'#ffa91f'}}/>}
        addArrowClickHandler
        >
            <Card 
            logo = {Logo01}
            name = "Daniel Hadfield"
            companyName = "Licensing & Compliance Division, Auckland Council"
            text = "EasyForms have been a key factor in helping us to become a smarter, more mobile workforce and have worked alongside us to help move from a manual, paper based process, to an intelligent digital process."
            />
            <Card 
            logo = {Logo01}
            name = "Daniel "
            companyName = "Licensing & Compliance Division, Auckland Council"
            text = "EasyForms have been a key factor in helping us to become a smarter, more mobile workforce and have worked alongside us to help move from a manual, paper based process, to an intelligent digital process."
            />
            <Card 
            logo = {Logo01}
            name = "Hadfield"
            companyName = "Licensing & Compliance Division, Auckland Council"
            text = "EasyForms have been a key factor in helping us to become a smarter, more mobile workforce and have worked alongside us to help move from a manual, paper based process, to an intelligent digital process."
            />
        </Carousel>
        </ ThemeProvider>
      );
    }
  }

export default CardCarousel;