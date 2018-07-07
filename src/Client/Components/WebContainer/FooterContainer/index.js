import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';

class FooterContainer extends Component {
    render() {
      return (
        <ThemeProvider theme={Themes}> 
        <Footer>
            <FooterTop>
              <FooterBox3>
                <Footer__title__display>SOCIAL MEDIA</Footer__title__display>
                <FooterRightContainer>
                    <Footer__sns href="https://www.facebook.com/EasyFormsNZ/?ref=aymt_homepage_panel">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </Footer__sns>
                    <Footer__sns href="https://twitter.com/EasyFormsNZ">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </Footer__sns>
                    <Footer__sns href="https://www.linkedin.com/company/easy-forms/">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    </Footer__sns>
                </FooterRightContainer>
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
                    <Nav>Home</Nav>
                    <Nav>About Us</Nav>
                    <Nav>Support</Nav>
                    <Nav>Blog</Nav>
                    <Nav>Contact Us</Nav>
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

const Footer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
font-family: Lato;
background: linear-gradient(${Themes.colors.blueLight}, ${Themes.colors.blue});

${breakpoint('md')`

`};
`;

//footer top css
const FooterTop = styled.div`
padding: 2.5em 0;
  
  ${breakpoint('md')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
margin: 2.75em auto 1.5em;
color: ${Themes.colors.white};

${breakpoint('md')`
margin: 0 1em 0 0;
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
padding:0.125em;
color: ${Themes.colors.lightGrey};
`;

const Footer__text_address = Footer__text.extend`
padding-top: 1.25em;
`;

const Footer__sns = styled.a`
color: ${Themes.colors.white};
font-size: 1.5em;
padding: 0 1em;

${breakpoint('md')`
padding: 0 0.5em;
`};
`;

const Nav = styled.a`
color: ${Themes.colors.lightGrey};
font-size: 1em;
display:block;
padding: 0.125em;
`;

//footer bottom css

const FooterBottom = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 2.5em;

${breakpoint('lg')`
flex-direction: row;
justify-content: space-between;
width: 1100px;
margin: auto;
`};
`;

const FooterBottomText = styled.span`
font-size: 0.55em;
text-align: center;
padding: 0.25em 0;
color: ${Themes.colors.lightGrey};
`;

  export default FooterContainer;