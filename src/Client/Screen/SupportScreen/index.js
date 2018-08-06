import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';
import Text from '../../Components/Common/Text';
import BigTitle from '../../Components/Common/Title/BigTitle.js';
import Section01Bg from '../../../Assets/Images/support.png';

import { UploadInput,
          CompanyNameInput,
          EmailInput,
          MessageInput,
          FullNameInput }from '../../Components/Common/Input';
import Button from '../../Components/Common/Button';

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
  constructor(props) {
    super(props);
    this.state = { 
      support: [] 
    };
  }

  componentDidMount() {
    let self = this;
      var data = {
        id: this.state.id,
        title: this.state.title,   
    }


    fetch('/support', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({support: data});
    }).catch(err => {
    console.log('caught it!',err);
    })
  }

  render(){
    return(
<ThemeProvider theme={Themes}>
    <div>
      <Container>
        <TopBgImg src={Section01Bg}/>
        <Header> 
          <TitleDiv>
            <TitleDiv__Title>Submit a support ticket</TitleDiv__Title>
            <TitleDiv__Line><HeaderLine /></TitleDiv__Line>
            <TitleDiv__Text>Please complete the form below which will direct your request to the appropriate member of the team. 
              This ensures greater efficiency around response times and also ensures processes are followed.
              <br /><br />
              We aim to respond to support requests within 24 hours on regular business days, however, 
              depending on the scale of your request this could take slightly longer.</TitleDiv__Text>
          </TitleDiv>
        </Header>
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
                <Button value="Tell us about Issue"/>
              </ButtonDiv>      
            </Form>
          </FormDiv>
      </Container>
    </div>
  </ThemeProvider>
    )
  }
}

const Container = styled.div`
  background-color:#eee;
`
const Header = styled.div`
  padding:60px 8% 40px 8%;
  display:flex;
  align-items:center;
  flex-direction:column;
  background-image:url(${Section01Bg});
  background-size:cover;
    ${breakpoint('lg')`
    background:none;
    display:flex;
    // justify-content:space-between;
    // flex-direction:row;
    // align-items:flex-end;
    padding:110px 10% 70px 10%;
    `}
`
const TopBgImg = styled.img`
  display:none;
    ${breakpoint('lg')`
      display:block;
      width:100vw;
      height:auto;
      position:absolute;
      top:120;
  //    z-index:-1;
    `}
`
const TitleDiv = styled.div`
  ${breakpoint('lg')`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:1366px;
    margin:0 auto;
    z-index:1;    
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
    width:80%;
    text-align:center;
  `}
`
const FormDiv = styled.div` 
  display:flex;
  flex-direction:column;
    ${breakpoint('lg')`
     flex-direction:column-reverse;
      margin:0 auto;
      max-width:1366px;
      z-index:1;
  `}
`
const Form = styled.div`
  height:auto;
  background-color:white;
  box-shadow:0 0 20px rgba(0,0,0,0.2);
  padding:60px 8%;
    ${breakpoint('lg')`
      margin:0 20% 200px 20%;
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
    // margin-bottom:50px;
  `}
`
const InputDiv__Left = styled.div`
//   display:flex;
//   flex-direction:column;
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