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
                    <span>0800 EASY FORMS</span>
                    <span>0800 3279 36767</span>
                    <span>office@easyforms.co.nz</span>
                    <span>4a Te Kea Place, Rosedale, Auckland</span>
                </div>
            
                <Footer__title>SITEMAP</Footer__title>
                <div>
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Support</span>
                    <span>Blog</span>
                    <span>Contact Us</span>
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
background: linear-gradient(red, yellow);
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
color: ${Themes.colors.blue};
`;

  export default FooterContainer;