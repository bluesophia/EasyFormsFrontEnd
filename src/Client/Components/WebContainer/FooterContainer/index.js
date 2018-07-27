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
          <Container>
            <FooterTop>
              <FooterBox3>
                <FooterTitleDisplay>SOCIAL MEDIA</FooterTitleDisplay>
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
                <FooterTitle>CONTACT US</FooterTitle>
                <FooterRightContainer>
                    <FooterText>0800 EASY FORMS</FooterText>
                    <FooterText>0800 3279 36767</FooterText>
                    <FooterText>office@easyforms.co.nz</FooterText>
                    <FooterTextAddress>4a Te Kea Place, <br />Rosedale, Auckland</FooterTextAddress>
                </FooterRightContainer>
              </FooterBox1>
                
              <FooterBox2>
                <FooterTitle>SITEMAP</FooterTitle>
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
          </Container>
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
    color: ${Themes.colors.lightGrey};
    font-size: 1em;
    padding: 0 1em;
      ${breakpoint('md')`
      padding: 0 0.5em;
      `};
      ${breakpoint('lg')`
      padding: 0 0.8em;
      `};
  `;

const Footer = styled.div`
  font-family: Lato;
  background-color:${Themes.colors.blue};
  padding: 0 10%;
  line-height:1.5em;
`;

const Container = styled.div`
  margin:0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoint('lg')`
      max-width: 1366px;
  `}
`

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

const FooterTitle = styled.span`
font-size: 1em;
text-align:center;
margin: 2.75em 0 1.5em;
color: ${Themes.colors.white};

${breakpoint('md')`
font-size: 0.8em;
margin: 0 1em 0 0;
text-align:left;
  `};
${breakpoint('lg')`
margin: 0 1em 0 0;
text-align:left;
  `};
`;

const FooterTitleDisplay = FooterTitle.extend`
display:none;

${breakpoint('md')`
display: block;
`};
`

const FooterText = styled.span`
  font-size: 1em;
  display:block;
  color: ${Themes.colors.lightGrey};
  font-weight: ${Themes.fontWeight.light};
`;

const FooterTextAddress = FooterText.extend`
padding-top: 1.25em;
`;

const StyledLink = styled(Link)`
  color: ${Themes.colors.lightGrey};
  font-size: 1em;
  display:block;
  text-decoration: none;
  font-weight: ${Themes.fontWeight.light};
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
font-size: ${Themes.fontsize.p4};
text-align: center;
padding: 0.25em 0;
color: ${Themes.colors.lightGrey};
`;

export default FooterContainer;