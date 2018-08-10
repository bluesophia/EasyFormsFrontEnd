import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';

/** components **/
import Text from '../../Components/Common/Text';
import BigTitle from '../../Components/Common/Title/BigTitle.js';

/** Images **/
import HomeSection01BgSm from '../../../Assets/Images/HomeSection01BgSm.png';
import Section01Bg from '../../../Assets/Images/SupportSection01Bg.png';
import Image from '../../../Assets/Images/SupportSection01Image.png';

import { UploadInput,
          CompanyNameInput,
          EmailInput,
          MessageInput,
          FullNameInput }from '../../Components/Common/Input';
import Button01 from '../../Components/Common/Button/Button01';

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

class SupportScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      support: []
    };
  }
  componentDidMount(){
   let self = this;
   var data = {
     id: this.state.id,
     title: this.state.title,
     descriptionfirst: this.state.descriptionfirst,
     descriptionsecond: this.state.descriptionsecond
   } 
   fetch('/api/support', {
     method:'GET'
   }).then(function(response) {
     if(response.status>=400) {
       throw new Error("Bad response from server");
     }
     return response.json();
   }).then(function(data) {
     self.setState({support:data});
   }).catch(err => {
     console.log('caught it!', err);
   })

  }
  render(){
    return(
        <ThemeProvider theme={Themes}>
          <Support>
              <Container>
                  <TitleDiv>
                    {this.state.support.map((support, index) => {
                      return(
                      <TitleDiv__Title>{support.title}</TitleDiv__Title>
                      )
                    })}
                    {this.state.support.map((support, index) => {
                      return(
                      <TitleDiv__Text>{support.descriptionfirst}</TitleDiv__Text>
                      )
                    })}
                    <br />
                    {this.state.support.map((support, index) => {
                      return(
                      <TitleDiv__Text>{support.descriptionsecond}</TitleDiv__Text>
                      )
                    })}
                  </TitleDiv>
                  <ImageDiv>
                    <TopBgImg src={Image}/>
                  </ImageDiv>
                  <FormDiv>
                    <Form>
                      <InputDiv>
                        <InputDiv__Left>
                          <CompanyNameInput />
                          <FullNameInput />
                          <EmailInput />
                        </InputDiv__Left>
                        <InputDiv__Right>
                            <MessageInput />
                          <UploadInput />
                        </InputDiv__Right>
                      </InputDiv>
                      <ButtonDiv>
                        <Button01 value="Tell us about Issue"/>
                      </ButtonDiv>      
                    </Form>
                  </FormDiv>
              </Container>
            </Support>
          </ThemeProvider>
          )
        }
      }
const Support = styled.div`
    margin:0;
    background: url('${HomeSection01BgSm}');
    background-position:center top;
    background-repeat:no-repeat;
    background-size: 100% auto;
    background-color:${Themes.colors.veryLightGrey};
    padding:18% 8%;
    ${breakpoint('md')`
      background: url('${Section01Bg}');
      background-position:left top;
      background-repeat:no-repeat;
      background-size:100% 32%; 
      background-color:${Themes.colors.veryLightGrey}; 
      padding:5% 10% 8% 10%;  
    `}
    ${breakpoint('lg')`
    background-size:100% 50%;   
    `}  
`
const Container = styled.div`
    ${breakpoint('md')`
      max-width:1366px;
      display:grid;
      grid-template-columns:40% 60%;
      margin:0 auto;
    `}
`
const ImageDiv = styled.div`
  margin-bottom:40px;
    ${breakpoint('md')`
    padding:0 20% 0 0;
    order:1;
    display:flex;
    flex-direction:column;
    align-items:flex-start; 
    justify-content:center;
    `}
    ${breakpoint('lg')`
    grid-row: 1 / 3;
    justify-content:flex-start; 
    `}
`
const TopBgImg = styled.img`
  height:auto;
  width:100%;
    ${breakpoint('md')`
    margin:0 auto;
    text-align:center;
  `}
`
const TitleDiv = styled.div`
  ${breakpoint('md')`
    order:2;  
    display:flex;
    flex-direction:column;
    align-items:flex-start;   
  `}
  ${breakpoint('lg')`
    margin:0 auto;
  `}
`
const TitleDiv__Title = styled.div`
  ${BigTitle};
  color:white;
  margin-bottom:40px;
  ${breakpoint('md')`
    text-align:left;
    margin:0px 20px 20px 0px; 
  `}
  ${breakpoint('lg')`
  padding:0 3%;
`}
`
const TitleDiv__Text = styled.div`
  display:none;
  ${breakpoint('md')`
    display:block;
    color:white;
    font-size:${Themes.fontsize.p3};
    line-height:18px;
    font-weight:${Themes.fontWeight.light};
    text-align:left;
  `}
  ${breakpoint('lg')`
    font-size:${Themes.fontsize.p2} !important;
    line-height:25px;  
    padding:0 3%;
  `}
`
const FormDiv = styled.div` 
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    margin:0 -5%;
    ${breakpoint('md')`
    order:3;  
    grid-column:1/3;
    margin:0;
    `}
      ${breakpoint('lg')`
        grid-column:unset;
    `}
`
const Form = styled.div`
  height:auto;
  background-color:white;
  box-shadow:0 0 10px rgba(0,0,0,0.2);
  padding:50px 8% 30px 8%;
  border-radius:25px;
    ${breakpoint('lg')`
    margin-top:30px;
  `}
`
const InputDiv = styled.div`
  margin-bottom:50px;
  display:flex;
  flex-direction:column;
`
const InputDiv__Left = styled.div`
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
  color:${Themes.colors.blueLight};
  font-size:${Themes.fontsize.p2};
  font-weight:${Themes.fontWeight.black};
`

export default SupportScreen;