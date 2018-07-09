import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import AboutContainer from '../../../Components/WebContainer/AboutContainer';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Components/Common/HeaderLine';

const Title = css`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
    text-transform:uppercase;
    letter-spacing:5px;
`
const Text = css`
    font-size:${Themes.fontsize.p3};
    color:${Themes.colors.black};
    text-align:center;
    line-height:20px;
`
const LightGreyBg = css`
  background-color:rgba(238,238,238,0.6);
`
const BlueBg = css`
  background:linear-gradient(${Themes.colors.blue},${Themes.colors.blueLight});
`
const AboutUsScreen = () => (
    <ThemeProvider theme={Themes}>   
      <div>
        <Section01>
            <Section01__TitleDiv>
                <Section01__Title>Global clients around Us</Section01__Title>
                <HeaderLine />
            </Section01__TitleDiv>
        </Section01>
          <Section02>
              <Section__TitleDiv>
                  <Section__Title>About Us</Section__Title>
                  <HeaderLine />
                  <Section__Text></Section__Text>
              </Section__TitleDiv>
          </Section02>
          <Section03>
              <Section__TitleDiv>
                  <Section__Title>Our Vision</Section__Title>
                  <HeaderLine />
                  <Section__Text></Section__Text>
              </Section__TitleDiv>
          </Section03>
      </div>
    </ThemeProvider>
)

const Section01 = styled.div`
  ${BlueBg};
`
const Section01__TitleDiv = styled.div``
const Section01__Title = styled.div`
  font-size:38px;
  margin:40px 0;
  text-align:center;
      ${breakpoint('lg')`
          text-align:right;
          margin:0;
      `}
`
const Section02 = styled.div``
const Section03 = styled.div``
const Section__TitleDiv = styled.div``
const Section__Title = styled.div``
const Section__Text = styled.div`
  ${Text};
`

export default AboutUsScreen;