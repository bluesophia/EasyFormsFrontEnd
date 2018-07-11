import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Components/Common/HeaderLine';
import Text from '../../../Components/Common/Text';
import BigTitle from '../../../Components/Common/Title/BigTitle.js';
import TopBg from '../../../../Assets/Images/contactUsBg.png';
import CallUsIcon from '../../../../Assets/Images/phone.png';
import MapWeb from '../../../../Assets/Images/map_web.png';
import MapAddress from '../../../../Assets/Images/map_address.png';

const Title = css`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
    text-transform:uppercase;
    letter-spacing:5px;
`
const LightGreyBg = css`
  background-color:rgba(238,238,238,0.6);
`
const BlueBg = css`
  background:linear-gradient(${Themes.colors.blue},${Themes.colors.blueLight});
`
const ContactUsScreen = () => (
  <ThemeProvider theme={Themes}>
    <div>
      <Container>
        <TopBgImg src={TopBg}/>
        <Header> 
          <TitleDiv>
            <TitleDiv__Title>Get In Touch</TitleDiv__Title>
            <HeaderLine />
            <TitleDiv__Text>Get in touch with us today to find out how we can help your business
              work smarter and more efficiently.</TitleDiv__Text>
          </TitleDiv>
          <CallUsDiv>
            <Icon src={CallUsIcon} />
            <CallUs>Call Us</CallUs>
            <PhoneNo>0800-3279-36767</PhoneNo>
          </CallUsDiv> 
        </Header>
        
        <Contents>
          <MapDiv>
            <MapDiv__Map src={MapWeb}/>
            <MapDiv__MapAddress src={MapAddress}/>
          </MapDiv>
          <FormDiv>
            <Form></Form>
          </FormDiv>
        </Contents>
      </Container>
    </div>
  </ThemeProvider>
)
const Container = styled.div`
`
const Header = styled.div`
  padding:60px 8% 40px 8%;
  display:flex;
  align-items:center;
  flex-direction:column;
  ${BlueBg};
    ${breakpoint('lg')`
    background:none;
    `}
`
const TopBgImg = styled.img`
  display:none;
    ${breakpoint('lg')`
      display:block;
      width:100vw;
      position:absolute;
      top:120;
      z-index:-1;
    `}
`
const TitleDiv = styled.div`
  ${breakpoint('lg')`
  `}
`
const TitleDiv__Title = styled.div`
  ${BigTitle};
  ${breakpoint('md')`
    ${BigTitle};
    font-size:35px;
  `}
`
const TitleDiv__Text = styled.div`
  display:none;
`
const CallUsDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:row;
`
const Icon = styled.img``
const CallUs = styled.span`
  font-size:${Themes.fontsize.h3};
  color:white;
  margin-right:10px;
`
const PhoneNo = styled.span`
  font-size:${Themes.fontsize.h3};
  color:${Themes.colors.yellow};
`
const Contents = styled.div`
  display:flex;
  flex-direction:column;
    ${breakpoint('lg')`
      flex-direction:column-reverse;
    `}
`
const FormDiv = styled.div`
`
const Form = styled.div`
  width:100%;
  height:700px;
  background-color:white;
    ${breakpoint('lg')`
      width:75%;
      margin:0 auto 100px auto;
      z-index:1;
  `}
`
const MapDiv = styled.div`
  position:relative;
`
const MapDiv__Map = styled.img`
  width:100vw;
  height:auto;
  text-align:center;
`
const MapDiv__MapAddress = styled.img`
  position:absolute;
  top:70px;
  left:70px;
`

export default ContactUsScreen;