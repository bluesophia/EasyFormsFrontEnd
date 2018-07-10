import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-router-dom';

class FooterContainer extends Component {
    render() {
      return (
        <ThemeProvider theme={Themes}> 
        <Footer>
            <FooterTop>
              <FooterBox3>
                <Footer__title__display>SOCIAL MEDIA</Footer__title__display>
                    <Box>
                      <Sns href="https://www.facebook.com/EasyFormsNZ/?ref=aymt_homepage_panel">
                          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                      </Sns>
                      <Sns href="https://twitter.com/EasyFormsNZ">
                          <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </Sns>
                      <Sns href="https://www.linkedin.com/company/easy-forms/">
                          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    </Sns>
            </Box>
              </FooterBox3>

              <FooterBox1>
                <Footer__title>CONTACT US</Footer__title>
                <FooterRightContainer>
                    <Footer__text>0800 EASY FORMS</Footer__text>
                    <Footer__text>0800 3279 36767</Footer__text>
                    <Footer__text>office@easyforms.co.nz</Footer__text>
                    <Footer__text_address>4a Te Kea Place, <br />Rosedale, Auckland</Footer__text_address>
                </FooterRightContainer>
              </FooterBox1>
                
              <FooterBox2>
                <Footer__title>SITEMAP</Footer__title>
                <FooterRightContainer>
                    <StyledLink to='/'>Home</StyledLink>
						        <StyledLink to='/about'>About</StyledLink>
						        <StyledLink to='/support'>Support</StyledLink>
						        <StyledLink to='/blog'>Blog</StyledLink>
						        <StyledLink to='/contact'>Contact Us</StyledLink>
                </FooterRightContainer>
              </FooterBox2>

            </FooterTop>

            <FooterBottom>
                <FooterBottomText>EasyForms complies with ISO 22301 and ISO IEC 27001</FooterBottomText>
                <FooterBottomText>ⓒ2018 EasyForms.co.nz</FooterBottomText>
            </FooterBottom>
        </Footer>
        </ThemeProvider> 
      );
    }
  }
  
  const Box = styled.div`
      display: flex;
      justify-content: center;
      ${breakpoint('md')`
      justify-content: flex-start;
  `};
  `;
  
  const Sns = styled.a`
  color: ${Themes.colors.white};
  font-size: 1.5em;
  padding: 0 1em;
  
  ${breakpoint('md')`
  padding: 0 0.5em;
  `};
  `;

const Footer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
font-family: Lato;
background: linear-gradient(${Themes.colors.blueLight}, ${Themes.colors.blue});
padding: 0 10%;
${breakpoint('md')`

`};
`;

//footer top css
const FooterTop = styled.div`
padding: 2.5em 0;
  
  ${breakpoint('md')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `};
`;

const FooterBox1 = styled.div`
display: flex;
flex-direction: column;

${breakpoint('md')`
flex-direction: row;
order:1;
`};
`;

const FooterBox2 = FooterBox1.extend`

${breakpoint('md')`
order:2;
`};
`;

const FooterBox3 = FooterBox1.extend`

${breakpoint('md')`
order:3;
`};
`;

const FooterRightContainer = styled.div`
text-align:center;

${breakpoint('md')`
text-align:left;
`};
`;

const Footer__title = styled.span`
font-size: 1em;
text-align:center;
margin: 2.75em 0 1.5em;
color: ${Themes.colors.white};

${breakpoint('md')`
margin: 0 0.5em 0 0;
text-align:left;
  `};
${breakpoint('lg')`
margin: 0 1em 0 0;
text-align:left;
  `};
`;

const Footer__title__display = Footer__title.extend`
display:none;

${breakpoint('md')`
display: block;
`};
`;

const Footer__text = styled.span`
font-size: 1em;
display:block;
padding:0.125em 0;
color: ${Themes.colors.lightGrey};
`;

const Footer__text_address = Footer__text.extend`
padding-top: 1.25em;
`;

const StyledLink = styled(Link)`
color: ${Themes.colors.lightGrey};
font-size: 1em;
display:block;
padding: 0.125em;
text-decoration: none;
`;

//footer bottom css

const FooterBottom = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 2.5em;

${breakpoint('md')`
flex-direction: row;
justify-content: space-between;
`};
`;

const FooterBottomText = styled.span`
font-size: 0.55em;
text-align: center;
padding: 0.25em 0;
color: ${Themes.colors.lightGrey};
`;

  export default FooterContainer;