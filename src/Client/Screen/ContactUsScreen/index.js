import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';
import Text from '../../Components/Common/Text';
import BigTitle from '../../Components/Common/Title/BigTitle.js';
import TopBg from '../../../Assets/Images/contactUsBg.png';
import CallUsIcon from '../../../Assets/Images/phone.png';

import CompanyNameInput from '../../Components/Common/Input/CompanyNameInput';
import FullNameInput from '../../Components/Common/Input/FullNameInput';
import EmailInput from '../../Components/Common/Input/EmailInput';
import MessageInput from '../../Components/Common/Input/MessageInput';
import Button from '../../Components/Common/Button';
import Button02 from '../../Components/Common/Button/Button02';
import MyMapComponent from './map';

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
            <TitleDiv__Line><HeaderLine /></TitleDiv__Line>
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
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-p5WQ9NQSErSYZB-U2anOUNKEGzWh-hU&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </MapDiv>
          <FormDiv>
            <Form>
              <InputDiv>
                <InputDiv__Left>
                  <CompanyNameInput />
                  <FullNameInput />
                  <EmailInput />
                </InputDiv__Left>
                <InputDiv__Right>
                  <MessageInput height='250px'/>
                </InputDiv__Right>
              </InputDiv>
              <ButtonDiv>
                <Button value={'Contact Our Software Experts'}/>
                <Form__Text>Or Try Our Software For Free</Form__Text>
                <Button02 value={'Experience EasyForms for yourself'}/>        
              </ButtonDiv>      
            </Form>
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
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    align-items:flex-end;
    padding:110px 15% 70px 15%;
    max-width:1200px;
    margin:0 auto;
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
    display:flex;
    flex-direction:column;
    align-items:flex-start;
  `}
`
const TitleDiv__Title = styled.div`
  ${BigTitle};
  ${breakpoint('md')`
    ${BigTitle};
    font-size:35px;
  `}
`
const TitleDiv__Line = styled.div`
`
const TitleDiv__Text = styled.div`
  display:none;
  ${breakpoint('lg')`
    display:block;
    color:white;
    font-size:${Themes.fontsize.p2};
    line-height:25px;
    font-weight:${Themes.fontWeight.light};
    width:470px;
  `}
`
const CallUsDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:row;

`
const Icon = styled.img`
  margin-right:10px;
`
const CallUs = styled.span`
  font-size:${Themes.fontsize.h3};
  color:white;
  margin-right:10px;
    ${breakpoint('lg')`
    font-size:${Themes.fontsize.h2};
  `}
`
const PhoneNo = styled.span`
  font-size:${Themes.fontsize.h3};
  color:${Themes.colors.yellow};
    ${breakpoint('lg')`
    font-size:${Themes.fontsize.h2};
  `}
`
const Contents = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:column;
    ${breakpoint('lg')`
      flex-direction:column-reverse;
    `}
`
const FormDiv = styled.div`

`
const Form = styled.div`
  height:auto;
  background-color:white;
  box-shadow:0 0 20px rgba(0,0,0,0.2);
  padding:60px 8%;
    ${breakpoint('lg')`
      margin:0 15% 100px 15%;
      z-index:1;
  `}
`
const InputDiv = styled.div`
  margin-bottom:50px;
  display:flex;
  flex-direction:column;
  ${breakpoint('lg')`
    // display:grid;
    // grid-template-columns:1fr 1fr;
    // grid-column-gap:4em;
    margin-bottom:50px;
  `}
`
const InputDiv__Left = styled.div`
  display:flex;
  flex-direction:column;
  ${breakpoint('lg')`
  margin-bottom:50px;  
`}
`
const InputDiv__Right = styled.div``
const ButtonDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  ${breakpoint('lg')`
    width:60%;  
    margin:0 auto;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  `}
`
const Form__Text = styled.div`
  margin:25px auto 10px auto;
  color:${Themes.colors.blue};
  font-size:${Themes.fontsize.p2};
  font-weight:${Themes.fontWeight.black};
`
const MapDiv = styled.div`
  position:relative;
  height:300px;
  ${breakpoint('lg')`
   height:500px;
  `}
`
export default ContactUsScreen;