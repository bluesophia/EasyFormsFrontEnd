import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';

class FooterContainer extends Component {
    render() {
      return (
        <ThemeProvider theme={Themes}> 
        <Footer>
            <FooterTop>

                <Footer__title>SOCIAL MEDIA</Footer__title>
                <div>
                    <a href="https://www.facebook.com/EasyFormsNZ/?ref=aymt_homepage_panel">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </a>
                    <a href="https://twitter.com/EasyFormsNZ">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                    <a href="https://www.linkedin.com/company/easy-forms/">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    </a>
                </div>
            
                <Footer__title>CONTACT US</Footer__title>
                <div>
                    <Footer__text>0800 EASY FORMS</Footer__text>
                    <Footer__text>0800 3279 36767</Footer__text>
                    <Footer__text>office@easyforms.co.nz</Footer__text>
                    <Footer__text>4a Te Kea Place, Rosedale, Auckland</Footer__text>
                </div>
            
                <Footer__title>SITEMAP</Footer__title>
                <div>
                    <Footer__text>Home</Footer__text>
                    <Footer__text>About Us</Footer__text>
                    <Footer__text>Support</Footer__text>
                    <Footer__text>Blog</Footer__text>
                    <Footer__text>Contact Us</Footer__text>
                </div>

            </FooterTop>

            <FooterBottom>
                <span>EasyForms complies with ISO 22301 and ISO IEC 27001</span>
                <span>2018 EasyForms.co.nz</span>
            </FooterBottom>
        </Footer>
        </ThemeProvider> 
      );
    }
  }

const Footer = styled.div`
display: flex;
flex-direction: column;
font-family: Lato;
background: linear-gradient(${Themes.colors.blueLight}, ${Themes.colors.blue});
`;

const FooterTop = styled.div`
display: flex;
flex-direction: column;
`;

const FooterBottom = styled.div`
display: flex;
flex-direction: column;
`;

const Footer__title = styled.span`
font-size: 1em;
text-align: center;
color: ${Themes.colors.white};
`;

const Footer__text = styled.span`
font-size: 1em;
text-align: center;
display:block;
color: ${Themes.colors.lightGrey};
`;
  export default FooterContainer;