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
  constructor(props){
    super(props);
    this.state={ 
        stories:[] 
    };
}

componentDidMount(){
    let self=this;
    var data = {
        id: this.state.id,
        name: this.state.name,
        descriptionlg: this.state.descriptionlg,
        descriptionsm: this.state.descriptionsm
    }

    fetch('/api/stories', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({stories: data});
    }).catch(err => {
    console.log('caught it!',err);
    })
  }
render () {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        {this.state.stories.map((stories, name, descriptionlg, descriptionsm) => {
                    return (
                        <Card 
                        logo={Logo01}
                        name={stories.name}
                        companyName={stories.descriptionlg}
                        text={stories.descriptionsm}
                        />
                    )
                    })}
        </Slider>
      );
    }
  }
export default CardCarousel;