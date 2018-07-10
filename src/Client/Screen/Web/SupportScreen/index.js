import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Components/Common/HeaderLine';
import Text from '../../../Components/Common/Text';
import BigTitle from '../../../Components/Common/Title/BigTitle.js';
import Section01Bg from '../../../../Assets/Images/support.jpg';

import FullNameInput from '../../../Components/Common/Input/FullNameInput'
import CompanyNameInput from '../../../Components/Common/Input/CompanyNameInput'
import EmailInput from '../../../Components/Common/Input/EmailInput'
import PhoneNumberInput from '../../../Components/Common/Input/PhoneNumberInput'

const BlueBg = css`
  background:linear-gradient(${Themes.colors.blue},${Themes.colors.blueLight});
`
const SupportScreen = () => (
  <ThemeProvider theme={Themes}>
    <div>
      <Section01>
        <BgImage></BgImage>
        <Section01__Contents>
          <Section01__TitleDiv>
            <Section01__Title>Submit a support ticket</Section01__Title>
            <HeaderLine />
            <Section01__Text>
              Please complete the form below which will direct your request to the appropriate member of the team. 
              This ensures greater efficiency around response times and also ensures processes are followed.
              <br /><br />
              We aim to respond to support requests within 24 hours on regular business days, however, 
              depending on the scale of your request this could take slightly longer.
            </Section01__Text>
          </Section01__TitleDiv>
          <Input>
            {/* input */}
            <Input__Div>
              <FullNameInput />
              <CompanyNameInput />
            </Input__Div>
            <Input__Div>
              <PhoneNumberInput />
              <EmailInput />
            </Input__Div>
          </Input>
        </Section01__Contents>
      </Section01>
    </div>
  </ThemeProvider>
)

const Input__Div = styled.div`
    display:flex;
    margin-left:3px;
`

const Section01 = styled.div`
  position:absolute;
  top:120;
  position:relative;
  height:135vh;
  display:flex;
  justify-content: center;
  ${breakpoint('md')`
    width:100vw;
    height:180vh;
  `}
`
const BgImage = styled.div`
  z-index:-1;
  top:0;
  left:0;
  background:linear-gradient(rgba(8,39,90), rgba(8,39,90,0.4)), url(${Section01Bg});
  background-size:cover;
  width:100%;
  height:50%;
  ${breakpoint('md')`
    width:100vw;
    height:100vh;
  `}
`
const Section01__Contents = styled.div`
  box-sizing:border-box;
  position:absolute;
  top: 0;
  margin:60px auto 0 auto;
    ${breakpoint('md')`
    padding:100px 10% 0 10%;
    top:230;
    `}
`
const Section01__TitleDiv = styled.div`
  padding:0 8%;
  margin:0 auto 40px auto;
  ${breakpoint('md')`
  `}
`
const Section01__Title = styled.div`
  ${BigTitle};
`
const Section01__Text = styled.div`
  display:none;
    ${breakpoint('md')`
      display:block;
      ${Text};
      font-weight:300;
      color:white;
    `}
`
const Input = styled.div`
  background-color:white;
  width:100%;
  height:100vh;
  box-shadow : 0 0 25px rgba(50, 50, 93, 0.2);
  margin:0 auto 85px auto;
  ${breakpoint('md')`
    width:80%;
  `}

`
const Section02 = styled.div`
`

export default SupportScreen;