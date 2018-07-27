import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Logo01 from '../../../../Assets/Images/auckland.gif';
import Logo02 from '../../../../Assets/Images/passrite.gif';
import Logo03 from '../../../../Assets/Images/toyota.gif';
import Card from '../Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ArrowLeft from '../Arrows/arrowLeft';
// import ArrowRight from '../Arrows/arrowRight';
import ArrowRightIcon from '../../../../Assets/Images/arrowRight.png';
import ArrowLeftIcon from '../../../../Assets/Images/arrowLeft.png';

import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';
import Slider from "react-slick";


function ArrowRight(props) {
  const { onClick, className } = props;
  return (
    <ArrowStyle
      src={ArrowRightIcon}
      onClick={onClick}
      className={className}
      right
    />
  );
}

function ArrowLeft(props) {
  const { onClick, className } = props;
  return (
    <ArrowStyle
      src={ArrowLeftIcon}
      onClick={onClick}
      className={className}
      left
    />
  );
}

const ArrowStyle = styled.img`
  width:10px;
  height:20px;
  margin:10px;
  display:none;
  ${breakpoint('sm')`
  display:block;
  width:14px;
  height:28px;
  left: ${props => props.left ? '0' : 'inherit'};  
  right: ${props => props.right ? '0' : 'inherit'};
  margin:0 3%;
  `}
  ${breakpoint('md')`
  width:14px;
  height:28px;
  `}
  ${breakpoint('lg')`
  // width:20px;
  // height:40px;
	`}
`

class CardCarousel extends Component {
render () {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:true,
    dots:true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        }
      }
    ]
  };
      return (
        <Slider {...settings}>
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
            text = "EasyForms took the design of our survey/audit and built this into a user friendly interface. The other solutions that were investigated before using EasyForms often missed core functionality and were not flexible enough in the reporting space.  Many other systems provided some core functionality, but not the bespoke report outputs that we required.  This was the key difference between EasyForms and the rest."
            />
        </Slider>
      );
    }
  }
export default CardCarousel;