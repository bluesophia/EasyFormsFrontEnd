import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import FeaturesCard from '../FeaturesCard';
// import ArrowLeft from '../Arrows/arrowLeft';
// import ArrowRight from '../Arrows/arrowRight';
import ArrowRightIcon from '../../../../Assets/Images/arrowRight.png';
import ArrowLeftIcon from '../../../../Assets/Images/arrowLeft.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';
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
  left: ${props => props.left ? '-28px' : 'inherit'};  
  right: ${props => props.right ? '-28px' : 'inherit'};
  ${breakpoint('sm')`
  width:14px;
  height:28px;
  left: ${props => props.left ? '-20px' : 'inherit'};  
  right: ${props => props.right ? '-20px' : 'inherit'};
  `}
  ${breakpoint('md')`
  width:14px;
  height:28px;
  left: ${props => props.left ? '-50px' : 'inherit'};    
  right: ${props => props.right ? '-50px' : 'inherit'};
  `}
  ${breakpoint('lg')`
  left: ${props => props.left ? '-70px' : 'inherit'};  
  right: ${props => props.right ? '-70px' : 'inherit'};
	`}
`

class FeaturesCarousel extends Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
        features: []
    };
  }

  componentDidMount() {
      let self = this;
        var data = {
          id: this.state.id,
          title: this.state.title,   
          iconName: this.state.iconName,
          description: this.state.description
      }

  //data fetch
  fetch('/api/features', {
      method: 'GET'
  }).then(function(response) {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
  }).then(function(data) {
      self.setState({features: data});
  }).catch(err => {
  console.log('caught it!',err);
  })
  }

render () {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows:true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };
      return (
        <Slider {...settings}>
        {this.state.features.map((features, title, description) => {
          return (<FeaturesCard  
                  iconName={features.iconName}
                  title={features.title}
                  text={features.description}
                  />
          )}
        )}
      </Slider>
      );
    }
  }

export default FeaturesCarousel;